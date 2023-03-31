<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters style="height: 150px">
      <v-col align-self="center">
        <!-- <v-card>
          <v-form>
            <v-text-field
          v-model="name"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
          </v-form>
        </v-card> -->
        <!-- <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "form-page",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style></style>
