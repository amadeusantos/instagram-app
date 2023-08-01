import { Image, Text, View } from "react-native";
import Perfil from "../perfil";
import { Ionicons } from "@expo/vector-icons";
import Button from "../button";
import { useState } from "react";
import { styles } from "./style";

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
    <View style={styles.container}>
      <View
        style={styles.body}
      >
        <View style={styles.top}>
          <Button>
            <Perfil image={imagePerfil} size={32} />
          </Button>
          <View style={styles.name}>
          <Button>
            <Text style={styles.nameText}>{name}</Text>
          </Button>
          {location?<Button><Text style={styles.location}>{location}</Text></Button>: ""}
        </View>
        </View>
        <Button>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </Button>
      </View>
      <Image
        source={{ uri: imagePost }}
        style={styles.imagePost}
      />
      <View
        style={styles.bottom}
      >
        <View style={styles.actions}>
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
          <View style={styles.infos}>
            <Perfil image={imageLike} size={16} />
            <Text style={styles.marginLeft4}>
              Liked by <Text style={styles.bold}>{infoLike}</Text>{" "}
              and<Text style={styles.body}> others</Text>
            </Text>
          </View>
        </Button>
        <Text style={styles.marginLeft4}>{comment}</Text>
      </View>
    </View>
  );
}
