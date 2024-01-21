<script>
export default {
  data() {
    return {
      currentUserID: null,
      isAuthenicated: false,
      message: {
        error: "",
        success: "",
      },
      users: [
        //Lisa
        {
          id: 1,
          name: "Lalisa Manobal",
          bio: " Sun-kissed vibes & city lights ✨",
          avatar: "/img/lisa.jpg",
          coverphoto: "/img/lisacover.jpg",
          relationShip: "Single",
          collage: "Seoul National University",
          email: "lisa@gmail.com",
          follower: "1.9M",
          following: "4",
          phone: "+82 010-78-198",
          country: "Korea",
          address: " Korea,Seoul.",
          job: "Singer",
          rank: "9,6",
          site: "www.lisa.com",
          birthday: "March 27, 1997",
          gender: "Female",
          password: "12345",
          posts: [
            {
              id: 1,
              title: "What Is Music ?",
              body: `Brief overview of the importance of music in human culture and society.
              Explore the origins and early forms of music.Highlight key developments in different 
              cultures and time periods.Break down the fundamental elements of music, including melody,
              harmony, rhythm, and dynamics. Discuss how these elements contribute to the overall musical
              experience.
              `,
            },
            {
              id: 2,
              title: "How to Create Music ?",
              body: `
              Emphasize the accessibility of music creation in the modern era.
              Highlight the creative potential for individuals interested in making their own music.
              Briefly cover essential music theory concepts such as scales, chords, and rhythm.
              Explain how a foundational understanding of music theory can aid in the creative process.
              Explore various musical instruments and digital tools available for music creation.
              Discuss the importance of selecting instruments that complement each other for a balanced sound.
              `,
            },
            {
              id: 3,
              title: "About Lisa -",
              body: `
              Lisa is a South Korean singer, rapper, and dancer who is a member of
              the popular K-pop group BLACKPINK. However, please note that information about individuals 
              can change over time, and my training only includes data up to that date.
              Lisa's full name is Lalisa Manoban (formerly Pranpriya Manoban). 
              She was born on March 27, 1997, in Bangkok, Thailand. Lisa joined YG Entertainment as a trainee
              in 2011 and later debuted with BLACKPINK in 2016. BLACKPINK quickly became one of the most 
              internationally recognized K-pop groups, 
              known for their energetic performances and catchy songs.
              `,
            },
          ],
        },
        //Rose
        {
          id: 2,
          name: "Rosean Park",
          bio: "🌈 | Dreamer & Doer ",
          avatar: "/img/Rose.jpg",
          coverphoto: "/img/rosecover.jpg",
          relationShip: "Single",
          collage: "Seoul National University",
          email: "rose@gmail.com",
          follower: "2.1M",
          following: "7",
          phone: "+82 903-56-977",
          country: "Korea",
          address: " Korea,Seoul.",
          job: "Singer",
          rank: "8,6",
          site: "www.rose.com",
          birthday: "February 11, 1997",
          gender: "Female",
          password: "12345",
          posts: [
            {
              id: 1,
              title: "What Is Music ?",
              body: `Brief overview of the importance of music in human culture and society.
              Explore the origins and early forms of music.Highlight key developments in different 
              cultures and time periods.Break down the fundamental elements of music, including melody,
              harmony, rhythm, and dynamics. Discuss how these elements contribute to the overall musical
              experience.
              `,
            },
            {
              id: 2,
              title: "How to Create Music ?",
              body: `
              Emphasize the accessibility of music creation in the modern era.
              Highlight the creative potential for individuals interested in making their own music.
              Briefly cover essential music theory concepts such as scales, chords, and rhythm.
              Explain how a foundational understanding of music theory can aid in the creative process.
              Explore various musical instruments and digital tools available for music creation.
              Discuss the importance of selecting instruments that complement each other for a balanced sound.
              `,
            },
            {
              id: 3,
              title: "About Rose -",
              body: `
              Rosé, whose full name is Roseanne Park, is a New Zealand-born singer and 
              a member of the popular K-pop group BLACKPINK. However, please note that information about 
              individuals can change over time, and my training only includes data up to that date.         
              As of my last knowledge update in January 2022, Rosé, whose full name is Roseanne Park, 
              is a New Zealand-born singer and a member of the popular K-pop group BLACKPINK. However, please note that information about individuals 
              can change over time, and my training only includes data up to that date.
              Born on February 11, 1997, in Auckland, New Zealand, Rosé moved to Australia at a young age.
              `,
            },
          ],
        },
        //Jisso
        {
          id: 3,
          name: "Kim Jisso",
          bio: " Coffee enthusiast ☕ ",
          avatar: "/img/jisso.jpeg",
          coverphoto: "/img/jissocover.jpg",
          relationShip: "Single",
          collage: "Seoul National University",
          email: "jisso@gmail.com",
          follower: "2.9M",
          following: "14",
          phone: "+82 903-89-977",
          country: "Korea",
          address: " Korea,Seoul.",
          job: "Singer",
          rank: "9,0",
          site: "www.jisso.com",
          birthday: "January 3, 1995",
          gender: "Female",
          password: "12345",
          posts: [
            {
              id: 1,
              title: "What Is Music ?",
              body: `Brief overview of the importance of music in human culture and society.
              Explore the origins and early forms of music.Highlight key developments in different 
              cultures and time periods.Break down the fundamental elements of music, including melody,
              harmony, rhythm, and dynamics. Discuss how these elements contribute to the overall musical
              experience.
              `,
            },
            {
              id: 2,
              title: "How to Create Music ?",
              body: `
              Emphasize the accessibility of music creation in the modern era.
              Highlight the creative potential for individuals interested in making their own music.
              Briefly cover essential music theory concepts such as scales, chords, and rhythm.
              Explain how a foundational understanding of music theory can aid in the creative process.
              Explore various musical instruments and digital tools available for music creation.
              Discuss the importance of selecting instruments that complement each other for a balanced sound.
              `,
            },
            {
              id: 3,
              title: "About Jisso -",
              body: `
              Kim Jisoo, often known mononymously as Jisoo, is a South Korean singer and actress. 
              She is a member of the popular K-pop group BLACKPINK. However, keep in mind that information
              about individuals can change over time, and my training only includes data up to that date.
              Born on January 3, 1995, in Gunpo, South Korea, Jisoo joined YG Entertainment as a trainee and later 
              became one of the four members of BLACKPINK, which debuted in 2016. Jisoo is the lead vocalist and 
              visual of the group, and she has gained recognition for her singing abilities and her striking visual 
              appearance.
              `,
            },
          ],
        },
        //Jinne
        {
          id: 4,
          name: "Jennie Kim",
          bio: "  Dancing through life's playlist 🎶",
          avatar: "/img/jinnecover.jpg",
          coverphoto: "/img/jinne.jpg",
          relationShip: "Single",
          collage: "Seoul National University",
          email: "jennie@gmail.com",
          follower: "1.9M",
          following: "10",
          phone: "+82 783-89-977",
          country: "Korea",
          address: " Korea,Seoul.",
          job: "Singer",
          rank: "9,0",
          site: "www.jennie.com",
          birthday: "January 16, 1996",
          gender: "Female",
          password: "12345",
          posts: [
            {
              id: 1,
              title: "What Is Music ?",
              body: `Brief overview of the importance of music in human culture and society.
              Explore the origins and early forms of music.Highlight key developments in different 
              cultures and time periods.Break down the fundamental elements of music, including melody,
              harmony, rhythm, and dynamics. Discuss how these elements contribute to the overall musical
              experience.
              `,
            },
            {
              id: 2,
              title: "How to Create Music ?",
              body: `
              Emphasize the accessibility of music creation in the modern era.
              Highlight the creative potential for individuals interested in making their own music.
              Briefly cover essential music theory concepts such as scales, chords, and rhythm.
              Explain how a foundational understanding of music theory can aid in the creative process.
              Explore various musical instruments and digital tools available for music creation.
              Discuss the importance of selecting instruments that complement each other for a balanced sound.
              `,
            },
            {
              id: 3,
              title: "About Jennie -",
              body: `
              Jennie Kim was born on January 16, 1996, in Seoul, South Korea.
              She spent part of her childhood in New Zealand, where she learned English.
              Jennie joined YG Entertainment as a trainee in 2010.
              She was the first member of BLACKPINK to be revealed to the public in 2012.
              BLACKPINK officially debuted in August 2016 with the single album "Square One," featuring the hit songs "Boombayah" and "Whistle."
              Jennie serves as the main rapper and a vocalist in BLACKPINK.
              She is known for her charismatic stage presence and versatile talents, contributing to both rapping and singing in the group's songs.
              `,
            },
          ],
        },
        //Vonzzy
        {
          id: 5,
          name: "Vonzy Felicia",
          bio: " Making memories, not regrets 📸",
          avatar: "/img/vonzy.jpg",
          coverphoto: "/img/vonzzy.jpg",
          relationShip: "Single",
          collage: "Bandung Institute of Technology",
          email: "vonzy@gmail.com",
          follower: "1.3M",
          following: "25",
          phone: "+62 980-78-767",
          country: "Indonesia",
          address: " Indonesia,Jakarta.",
          job: "Model",
          rank: "9,0",
          site: "www.vonzzy.com",
          birthday: "December 14, 2000",
          gender: "Female",
          password: "12345",
          posts: [
            {
              id: 1,
              title: "What Is Esports ?",
              body: `Esports, short for electronic sports, refers to competitive,
              organized video gaming, typically in the form of multiplayer video game competitions 
              between professional players, individually or as teams. Esports can involve a wide variety 
              of video game genres, including first-person shooters, real-time strategy games, multiplayer 
              online battle arena (MOBA) games, sports simulations, and more.
              `,
            },
            {
              id: 2,
              title: "How to Create Esports Team ?",
              body: `Clearly outline the goals and objectives of your esports team.
              Determine the games you want to compete in, the level of competition (amateur, semi-pro, or professional),
              and your long-term vision for the team.Choose the specific video games your team will compete in. Focus on games that are popular and have active competitive scenes.
              Consider the preferences and strengths of your potential players.Create a unique and memorable brand for your esports team, including a team name, logo, colors, and social media presence.
              A strong brand can help attract sponsors and fans.
              `,
            },
          ],
        },
        //Sze
        {
          id: 6,
          name: "Sheryl Jesslyn",
          bio: " Making memories, not regrets 📸",
          avatar: "/img/sze.jpg",
          coverphoto: "/img/sze1.jpg",
          relationShip: "Single",
          collage: "Bandung Institute of Technology",
          email: "sze@gmail.com",
          follower: "1.1M",
          following: "35",
          phone: "+62 350-78-767",
          country: "Indonesia",
          address: " Indonesia,Jakarta.",
          job: "Model",
          rank: "8,0",
          site: "www.sze.com",
          birthday: "December 4, 2006",
          gender: "Female",
          password: "12345",
          posts: [
            {
              id: 1,
              title: "What Is Esports ?",
              body: `Esports, short for electronic sports, refers to competitive,
              organized video gaming, typically in the form of multiplayer video game competitions 
              between professional players, individually or as teams. Esports can involve a wide variety 
              of video game genres, including first-person shooters, real-time strategy games, multiplayer 
              online battle arena (MOBA) games, sports simulations, and more.
              `,
            },
            {
              id: 2,
              title: "How to Create Esports Team ?",
              body: `Clearly outline the goals and objectives of your esports team.
              Determine the games you want to compete in, the level of competition (amateur, semi-pro, or professional),
              and your long-term vision for the team.Choose the specific video games your team will compete in. Focus on games that are popular and have active competitive scenes.
              Consider the preferences and strengths of your potential players.Create a unique and memorable brand for your esports team, including a team name, logo, colors, and social media presence.
              A strong brand can help attract sponsors and fans.
              `,
            },
          ],
        },
      ],
    };
  },
  watch: {
    currentUserID: {
      handler() {
        localStorage.setItem("currentUserID", this.currentUserID);
      },
    },
    isAuthenicated: {
      handler() {
        localStorage.setItem("isAuthenicated", this.isAuthenicated);
      },
    },
  },
  mounted() {
    this.currentUserID = Number(localStorage.getItem("currentUserID"));
    this.isAuthenicated = localStorage.getItem("isAuthenicated") === "true";
  },
  methods: {
    login(data) {
      const hasAccount = this.users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (hasAccount) {
        this.currentUserID = hasAccount.id;
        this.isAuthenicated = true;
        this.message.success = "LOGIN SUCCESS";
        this.$router.push(`/users/${this.currentUserID}`) // to single profile
        // this.$router.push(`/users`) // to all users
      } else {
        this.currentUserID = null;
        this.isAuthenicated = false;
        this.message.error = "LOGIN FAILED";
      }
    },
    clear() {
      this.message.error = "";
      this.message.success = "";
    },
  },
};
</script>

<template>
  <router-view
    :currentUserID="currentUserID"
    :isAuthenicated="isAuthenicated"
    :users="users"
    @login="login"
    :message="message"
    @clear="clear"
  ></router-view>
</template>
