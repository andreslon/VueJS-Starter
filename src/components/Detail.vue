<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <b>Environment:</b>
      <span>{{ env }}</span>
    </div>
    <div>
      <b>Language:</b>
      <span>{{ $t("language") }}</span>
    </div>
    <div>
      <span>{{ $t("message.description") }}</span>
    </div>

    <div>
      <md-button
        v-for="lang in languages"
        :key="lang"
        class="md-raised"
        @click="changeLang(lang)"
      >{{lang}}</md-button>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
      quibusdam, non molestias et! Earum magnam, similique, quo recusandae
      placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
      explicabo, neque.
    </p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      env: process.env.NODE_ENV,
      languages: ["en", "es"]
    };
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
</style>