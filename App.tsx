import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import Story from "./src/components/story";
import Post from "./src/components/post";
import TopBar from "./src/components/topBar";
import TabBar from "./src/components/tabBar";

export default function App() {
  const user = {id: 0, name: "Jacob", image: "https://images3.alphacoders.com/601/thumb-1920-601862.jpg"}

  const storys = [
    {id: 1, name: "Altair", image: "https://i.pinimg.com/736x/48/e1/73/48e173aff7944fdd4a1219bf41f1c2aa.jpg"}, {id: 2, name: "Ezio", image: "https://i.pinimg.com/736x/3d/dc/13/3ddc13ae6a59f23f2021172f7e3aec57.jpg"}, {id: 3, name: "Connor", image: "https://c4.wallpaperflare.com/wallpaper/995/718/396/assassins-creed-assassins-creed-iii-assassins-creed-3-assassin-connor-davenport-video-games-wallpaper-preview.jpg"}, {id: 4, name: "Edward", image: "https://c4.wallpaperflare.com/wallpaper/183/898/490/weapons-assassin-s-creed-saber-black-flag-wallpaper-preview.jpg"},
    {id: 5, name: "Shay", image: "https://cdn.wallpapersafari.com/6/22/DMTPs0.png"}, {id: 6, name: "Arno", image: "https://s-media-cache-ak0.pinimg.com/736x/a7/5c/38/a75c3822eed3b6520b3e258f39f7e45a.jpg"}, {id: 7, name: "Bayek", image: "https://e0.pxfuel.com/wallpapers/434/693/desktop-wallpaper-assasins-creed-bayek-assasins-creed-bayek-background-on-bat.jpg"}, {id: 8, name: "Eivor", image: "https://e0.pxfuel.com/wallpapers/983/501/desktop-wallpaper-assassin-s-creed-valhalla-female-eivor-with-axe-2020.jpg"}
  ]

  const posts = [
    {
      id: 10,
      imagePerfil: "https://s-media-cache-ak0.pinimg.com/736x/a7/5c/38/a75c3822eed3b6520b3e258f39f7e45a.jpg",
      name: "Arno",
      imagePost: "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/04/assassins-creed-unity-ajudar-reconstrucao-catedral-de-notre-dame.png",
      comment: `🕊️ Exploring the Beauty of History 🕊️
I feel a special connection to this iconic landmark that has witnessed centuries of Parisian tales. It reminds me of the importance of preserving our heritage and cherishing the legacies of the past. Let us remember the lessons of history as we move towards a brighter future. 🌟`,
      imageLike: "https://i.pinimg.com/736x/3d/dc/13/3ddc13ae6a59f23f2021172f7e3aec57.jpg",
      infoLike: "Ezio",
      location: "Cathédrale Notre-Dame",
    },
    {
      id: 11,
      imagePerfil: "https://c4.wallpaperflare.com/wallpaper/995/718/396/assassins-creed-assassins-creed-iii-assassins-creed-3-assassin-connor-davenport-video-games-wallpaper-preview.jpg",
      name: "Connor",
      imagePost: "https://wallpaperaccess.com/full/325919.jpg",
      comment: `🦅 Embracing Freedom's Call 🦅

      Roaming the vast expanse of the American Frontier, I, Connor from Assassin's Creed III, find myself drawn to the untamed beauty of nature and the spirit of liberty that courses through this land! 🇺🇸🌲
      Let us remember the sacrifices made by those who came before us and honor the principles that unite us as a people. Together, we can build a brighter future, one where freedom and justice reign. 🗽`,
      imageLike: "https://c4.wallpaperflare.com/wallpaper/183/898/490/weapons-assassin-s-creed-saber-black-flag-wallpaper-preview.jpg",
      infoLike: "Edward"
    },
    {
      id: 12,
      imagePerfil: "https://e0.pxfuel.com/wallpapers/983/501/desktop-wallpaper-assassin-s-creed-valhalla-female-eivor-with-axe-2020.jpg",
      name: "Eivor",
      imagePost: "https://earlyaxes.co.za/wp-content/uploads/2021/05/wrath-of-the-druids.jpg",
      comment: `🗡️ Embracing Valhalla's Glory 🗡️

      Behold, the fierce Eivor from Assassin's Creed Valhalla, standing before a mighty Viking longship! 🛶⚔️ As we sail across uncharted waters and explore new horizons, I am reminded of the spirit of adventure and bravery that defines the Viking way of life.
      In the face of challenges, we Vikings stand undaunted, ready to seize every opportunity that comes our way. Let us forge our paths with honor, brotherhood, and the strength of our ancestors. Skál! 🍻`,
      imageLike: "https://e0.pxfuel.com/wallpapers/434/693/desktop-wallpaper-assasins-creed-bayek-assasins-creed-bayek-background-on-bat.jpg",
      infoLike: "Bayek"
    }
  ]


  return (
    <View>
      <ScrollView>
        <TopBar />
        <StatusBar hidden={true} style="dark" />
        <ScrollView horizontal={true} style={{ padding: 4 }}>
          <Story key={user.id} name="Your Story" image={user.image} />
          {storys.map(({id, name, image}) => <Story key={id} name={name} image={image} />)}
        </ScrollView>
        <View>
          {posts.map(({id, imagePerfil, name, imagePost, comment, imageLike, infoLike, location})=> <Post key={id} name={name} imagePerfil={imagePerfil} location={location} imagePost={imagePost} imageLike={imageLike} infoLike={infoLike} comment={comment} /> )}
        </View>
        <View style={{ height: 64 }}></View>
      </ScrollView>
      <TabBar image={user.image} />
    </View>
  );
}
