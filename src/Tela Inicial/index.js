import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Picker, Modal, Alert, Image } from "react-native";


export default function Form() {

    const [cidade, setCidade] = useState(null);
    const [bairro, setBairro] = useState(null);
    const [rua, setRua] = useState(null);
    const [numero, setNumero] = useState(null);
    const [Descricao, setDescricao] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("default");

  
    function validar() {
        if(cidade != null && selectedValue != "default" && bairro != null && rua != null && numero != null && descricao != null) {
            setIsOpen(true)
        } else {
            Alert.alert('Todos esses campos precisam ser preenchidos!')
        }
    }
    function confirmarEnvio() {
        setIsOpen(false)
        setCidade(null)
        setBairro(null)
        setRua(null)
        setNumero(null)
        setDescricao(null)
        setSelectedValue("default")
    }


    return (
        <View>
            <View style={estilos.form}>
                <Text style={estilos.label}>Digite sua Cidade</Text>
                <TextInput 
                style={estilos.input}
                keyboardType="default" 
                onChangeText={setCidade} 
                value={cidade} 
                />
                <Text style={estilos.label}>Informe o Bairro</Text>
                <TextInput 
                onChangeText={setBairro} 
                value={bairro}
                style={estilos.input} />
                <Text style={estilos.label}>Informe a Rua</Text>
                <TextInput 
                onChangeText={setRua} 
                value={rua}
                style={estilos.input} />
                <Text style={estilos.label}>Informe o Número</Text>
                <TextInput 
                onChangeText={setNumero} 
                value={numero}
                style={estilos.input} />
                <Text style={estilos.label}>Descricao</Text>
                <TextInput 
                onChangeText={setDescricao} 
                value={descricao}
                style={estilos.input} />

                <TouchableOpacity style={estilos.botao} 
                onPress={() => validar()} >
                <Text style={estilos.botaoTexto}>
                      Notificar
                </Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    );
}

