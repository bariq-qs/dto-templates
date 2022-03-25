<template>
  <div class="login background-grey-lighten-5 w-100 h-100 pb-16 relative">
    <section class="flex card bg-white items-center">
      <div class="form relative m-auto">
        <img src="@/assets/images/icon-dot.png" class="h-10 mx-auto" alt="logo">
        <form class="p-16 w-full" @submit.prevent="submitData()">
          <div class="p-fluid mb-5">
            <div class="p-field mb-6">
              <label for="username">Username</label>
              <InputText id="username" autofocus class="grey-input" placeholder="Username" type="text" v-model="email" />
            </div>
            <div class="p-field">
              <label for="password">Password</label>
              <Password id="password" class="grey-input" placeholder="Password" :feedback="false" :toggleMask="true" v-model="password" />
            </div>
          </div>
          <Button class="btn-primary" id="submit-login" :disabled="loading" type="submit">
            <ProgressSpinner v-if="loading" strokeWidth="5px" />
            <span v-else class="mx-auto font-bold text-white">Masuk</span>
          </Button>
        </form>
      </div>
    </section>
  </div>
</template>

<script src="@/composable/container/pages/Login/loginComposable" lang="ts" />
<style src="@/assets/styles/scss/container/pages/login.scss" lang="scss" />
