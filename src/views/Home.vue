<template>
  <v-container fluid pa-3>
    <v-row>
      <!------------------------ SCREAM LIST ----------------------->
      <v-col cols="12" sm="8" v-if="screams" order="1" order-sm="1">
        <!------------------------ SCREAM ITEM ----------------------->
        <v-card
          class="mb-5"
          v-for="(scream, i) in screamList"
          :key="i"
          elevation="0"
        >
          <AppScreamCard :scream="scream"></AppScreamCard>
        </v-card>
        <!------------------------ END SCREAM ITEM ----------------------->
      </v-col>
      <v-col cols="12" sm="8" v-else order="1">
        <v-card v-for="n in 5" :key="n" class="mb-5" elevation="0">
          <AppScreamContentLoader></AppScreamContentLoader>
        </v-card>
      </v-col>
      <!------------------------ END SCREAM LIST ----------------------->

      <!------------------------ PROFILE----------------------->
      <v-col cols="12" sm="4" order="-1" order-sm="2">
        <v-card min-height="300" elevation="0">
          <AppPerfilContentLoader
            v-show="isAuthenticated && !userCredentials"
          ></AppPerfilContentLoader>

          <!------------------------ PROFILE CARD ----------------------->
          <AppProfile
            v-if="isAuthenticated"
            :data="userCredentials"
          ></AppProfile>
          <!------------------------ END PROFILE CARD ----------------------->

          <AppDisabledProfile v-show="!isAuthenticated"></AppDisabledProfile>
        </v-card>
      </v-col>
      <!------------------------ END PROFILE ----------------------->
    </v-row>
  </v-container>
</template>

<script>
import AppPerfilContentLoader from '@/components/loaders/AppPerfilLoader.vue';
import AppScreamContentLoader from '@/components/loaders/AppScreamLoader.vue';
import AppProfile from '@/components/profile/AppProfile.vue';
import AppDisabledProfile from '@/components/profile/AppDisabledProfile.vue';
import AppScreamCard from '@/components/scream/AppScreamCard.vue';

import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    AppScreamCard,
    AppProfile,
    AppDisabledProfile,
    AppPerfilContentLoader,
    AppScreamContentLoader,
  },
  computed: {
    ...mapState(['screams', 'status']),
    ...mapGetters([
      'userCredentials',
      'screamList',
      'loadingUI',
      'isAuthenticated',
    ]),
  },
};
</script>
