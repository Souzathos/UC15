import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface CartaoProps {
  titulo: string;
  preco: number;
  onComprar: () => void;
}

const Cartao = ({ titulo, preco, onComprar }: CartaoProps) => {
  return (
    <View style={styles.caixa}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text>R$ {preco}</Text>
      <TouchableOpacity onPress={onComprar}>
        <Text >Comprar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cartao

const styles = StyleSheet.create({
    caixa: { padding: 16, backgroundColor: '#f2f2f2', borderRadius: 8 },
    titulo: { fontSize: 16, fontWeight: 'bold' },
  })