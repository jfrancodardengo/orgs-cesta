import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "./Texto";

export default function Botao({ texto, style, onPress }) {
  let estilo = estilos.botao;

  return (
    <TouchableOpacity style={[style, estilo]} onPress={onPress}>
      <Texto style={estilos.textoBotao}>{ texto }</Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
