Vue.component("navigation", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Food Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
});

Vue.component("image-component", {
  props: ["src", "alt"],
  template: `
    <img :src="src" :alt="alt" class="img-fluid rounded mx-auto d-block my-3" width="180">
  `,
});

Vue.component("blog-posts", {
  props: ["posts"],
  template: `
    <section id="blogposts">
      <div v-for="post in posts" :key="post.author" class="post">
        <img :src="profileImage" @click="showAuthorInfo(post)" width="50" height="50" />
        <span class="author">{{ post.author }}</span> —
        <span class="date">{{ post.date }}</span>
        <span class="reply">REPLY</span>
        <p>{{ post.content }}</p>
        <div :class="{ 'author-info': true, 'active': post.showInfo }">
          <button @click="hideAuthorInfo(post)">&times;</button>
          <h3>{{ post.author }}</h3>
          <p>Foodie Level: Intermediate</p>
          <p>{{ authorBio(post.author) }}</p>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      profileImage: "images/profile.png", // Update with actual image path
    };
  },
  methods: {
    showAuthorInfo(post) {
      this.posts.forEach((p) => (p.showInfo = false));
      post.showInfo = true;
    },
    hideAuthorInfo(post) {
      post.showInfo = false;
    },
    authorBio(author) {
      const bios = {
        Brianna: "Brianna loves to cook and try new recipes.",
        LINH: "LINH enjoys sharing meals with family.",
        "CATHERINE LEONARDO": "Catherine is passionate about healthy eating.",
        KALI: "Kali loves experimenting with new ingredients.",
      };
      return bios[author] || "No bio available.";
    },
  },
});

new Vue({
  el: "#app",
  data: {
    posts: [
      {
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        content:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
        showInfo: false,
      },
      {
        author: "LINH",
        date: "February 15, 2021 @ 9:46 am",
        content:
          "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!",
        showInfo: false,
      },
      {
        author: "CATHERINE LEONARDO",
        date: "February 13, 2021 @ 12:58 pm",
        content:
          "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
        showInfo: false,
      },
      {
        author: "KALI",
        date: "February 13, 2021 @ 11:31 am",
        content:
          "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
        showInfo: false,
      },
    ],
  },
});
