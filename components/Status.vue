
<template>
    <div class="discord-data" @click="$fetch">
          <img v-if="$fetchState.pending || $fetchState.error" class="discord-img" src="https://pbs.twimg.com/profile_images/1376285543667929089/snVTYQht_400x400.jpg">
          <img v-else class="discord-img" :src="`${lanyard.img}`">
          <div class="discord-text">
              <div v-if="$fetchState.pending || $fetchState.error" class="discord-big">sycles</div>
              <div v-else class="discord-big">{{ lanyard.big_text }}</div>
              <div v-if="$fetchState.pending || $fetchState.error" class="discord-small">Loading lanyard...</div>
              <div v-else class="discord-small">{{ lanyard.small_text }}</div>
          </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lanyard: {}
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 5000) {
        this.$fetch()
      }
  },
  async fetch() {
    var lanyrad_url = 'https://api.lanyard.rest/v1/users/767877736739242025';
    var response = await fetch(lanyrad_url);
    var lanyrad_response = await response.json();

    if (lanyrad_response.success == false) {
      this.lanyard = {
        img: 'https://pbs.twimg.com/profile_images/1376285543667929089/snVTYQht_400x400.jpg',
        big_text: 'sycles',
        small_text: 'Lanyard is offline.'
      }
      return;
    }

    var activity = lanyrad_response.data.activities[lanyrad_response.data.activities.length -1];

    this.lanyard = {
        img: 'https://cdn.discordapp.com/avatars/' + lanyrad_response.data.discord_user.id + '/' + lanyrad_response.data.discord_user.avatar,
        big_text: lanyrad_response.data.discord_user.username + '#' + lanyrad_response.data.discord_user.discriminator,
        small_text: "Not currently active."
    }

    if (activity.name == 'Visual Studio Code') {
        this.lanyard.img = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
        this.lanyard.big_text = activity.name;
        this.lanyard.small_text = activity.state;
    }

    if(lanyrad_response.data.listening_to_spotify == true) {
        this.lanyard.img = lanyrad_response.data.spotify.album_art_url;
        this.lanyard.big_text = `Listening to Spotify`
        this.lanyard.small_text = `${lanyrad_response.data.spotify.song} by ${lanyrad_response.data.spotify.artist}`
    }

    if(activity.name == 'Netflix') {
        this.lanyard.big_text = activity.details;
        this.lanyard.small_text = activity.state;
    }

    if (this.lanyard.img == undefined) {
        this.lanyard.img = userimg;
    }
    if (this.lanyard.big_text == undefined) {
        this.lanyard.big_text = lanyrad_response.data.discord_user.username + '#' + lanyrad_response.data.discord_user.discriminator;
    }
    if (this.lanyard.small_text == undefined) {
        this.lanyard.small_text = "Not currently active.";
    }
  }
}
</script>