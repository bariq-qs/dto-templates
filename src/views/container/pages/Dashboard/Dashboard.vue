<template>
  <section>
    <Card class="m-5">
      <template #title>
        <div class="flex w-full justify-between">
          <Button @click="logOut()">
            Keluar
          </Button>
          <div class="">
            <InputIconRightGrey ref="cmpSearch" v-model="inputSearch" class="w-full lg:w-auto md:w-auto" placeholder="Cariiii Berdasarkan Nama" :type="$enumBase.input.text" :icon="$icon.svg.searchEva" />
          </div>
        </div>
      </template>
      <template #content>
        <DataTable :value="dataFilter" class="table-og" responsiveLayout="scroll">
          <Column header="Jenis Stiker">
            <template #body="slotProps">
              <p class="font-semibold">{{ slotProps.data.name }}</p>
            </template>
          </Column>
          <Column header="Jumlah">
            <template #body="slotProps">
              <p class="font-semibold">{{ slotProps.data.email }}</p>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </section>
</template>

<script src="@/composable/container/pages/Dashboard/dashboardComposable.ts" lang="ts">
</script>