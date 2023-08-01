import { Image, Text, View } from "react-native";
import Perfil from "../perfil";
import { Ionicons } from "@expo/vector-icons";
import Button from "../button";
import { useState } from "react";

interface PostProps {
  imagePerfil: string;
  name: string;
  imagePost: string;
  comment: string;
  imageLike: string;
  infoLike: string;
  location?: string;
}

export default function Post({
  imagePerfil,
  imagePost,
  name,
  comment,
  imageLike,
  infoLike,
  location
}: PostProps) {

  const [like, setLike] = useState(false);

  function clickLike() {
    setLike(!like);
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Button>
            <Perfil image={imagePerfil} size={32} />
          </Button>
          <View style={{ alignItems: "center", justifyContent: "flex-start"}}>
          <Button>
            <Text style={{ fontWeight: "500", fontSize: 16 }}>{name}</Text>
          </Button>
          {location?<Button><Text style={{ fontSize: 10, marginTop: -10, marginLeft: -10 }}>{location}</Text></Button>: ""}
        </View>
        </View>
        <Button>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </Button>
      </View>
      <Image
        source={{ uri: imagePost }}
        style={{ width: "100%", height: 400, borderRadius: 4 }}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 6,
          paddingTop: 2,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Button action={clickLike}>
            {like? <Ionicons name="heart" size={32} color="red" /> : <Ionicons name="heart-outline" size={32} color="black" />}
          </Button>
          <Button>
            <Ionicons name="chatbubble-outline" size={32} color="black" />
          </Button>

          <Button>
            <Ionicons name="send-outline" size={32} color="black" />
          </Button>
        </View>
        <Button>
          <Ionicons name="save-outline" size={32} color="black" />
        </Button>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 10 }}>
        <Button>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Perfil image={imageLike} size={16} />
            <Text style={{ marginLeft: 4 }}>
              Liked by <Text style={{ fontWeight: "bold" }}>{infoLike}</Text>{" "}
              and<Text style={{ fontWeight: "bold" }}> others</Text>
            </Text>
          </View>
        </Button>
        <Text style={{ marginLeft: 4 }}>{comment}</Text>
      </View>
    </View>
  );
}
