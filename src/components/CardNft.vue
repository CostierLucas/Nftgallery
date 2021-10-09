<template>
    <div v-for="items in content.body" :key="items.id" >
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src=items.image :alt=items.image>
            <div class="px-6 py-4 flex justify-between ">
                <div class="font-bold text-xl mb-2">
                    {{ items.title }}
                </div>
                <div>
                    <button @click="addlike">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <span id="counter-like">{{items.counter}}</span>
                </div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nft</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bot</span>
            </div>
        </div>
    </div>
</template>

<script>
import uniqueId from "lodash";
export default {
  data() {
    return {
      content: {
        body: [
          {
            id: uniqueId("todo-"),
            title: "mekaverse",
            image: "https://themekaverse.com/images/meka_02.jpg",
            counter: 0,
          },
          {
            id: uniqueId("todo-"),
            title: "CryptoPunk",
            image: "https://pbs.twimg.com/media/EwKNWFRXIAA94V4.png:large",
            counter: 0,
          },
        ],
      },
    };
  },
  methods: {
    addlike: function () {
      this.content.body.counter += 1;
    },
  },
};
</script>