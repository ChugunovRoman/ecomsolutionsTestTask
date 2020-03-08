<script lang="ts">
  import { Client } from '@hapi/nes/lib/client';

  import Load from './load.svelte';

  let sell: number | null = null;
  let buy: number | null = null;
  let date: string | null = null;

  (async () => {
    const nes = new Client('ws://localhost:3000');
    const dtf = new Intl.DateTimeFormat('en', { hour12: false,  year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: '2-digit', second: '2-digit'});

    await nes.connect();

    nes.subscribe('/course', (res: string, flags) => {
      const data: Ws.Data<Ws.Course> = JSON.parse(res);
      const [{ value: mo },,{ value: da },,{ value: ye },,{ value: hr },,{ value: mn },,{ value: sd }] = dtf.formatToParts(new Date(data.timestamp));

      sell = data.sell;
      buy = data.buy;
      date = `${da}.${mo}.${ye} ${hr}:${mn}:${sd}`;
    });
  })();
</script>

<style lang="scss">
  .course {
    display: inline-flex;
    flex-direction: column;

    &__item {
      display: inline-flex;
      justify-content: space-between;

      & > span {
        margin-right: 20px;
      }
    }
  }
</style>

{#if sell && buy && date }
  <div class="course">
    <div class="course__item">
      <span>Sell:</span>
      <span>{sell}</span>
    </div>
    <div class="course__item">
      <span>Buy:</span>
      <span>{buy}</span>
    </div>
    <div class="course__item">
      <span>Last update date: </span>
      <span>{date}</span>
    </div>
  </div>
{:else}
  <Load />
{/if}