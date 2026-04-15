import { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import modalStyle from '/workspaces/primeiroMobile/AtividadePratica/atividadePratica/Styles/ModalStyle.js';

const CustomModalScreen = ({ animation, themeColor }) => {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={[modalStyle.screenContainer]}>
            <Text style={[modalStyle.headerText, { color: themeColor }]}>
                Modo: {animation.toUpperCase()}
            </Text>

            <TouchableOpacity 
                style={[modalStyle.mainButton, { backgroundColor: themeColor }]} 
                onPress={() => setVisible(true)}
            >
                <Text style={[modalStyle.buttonText]}>ABRIR MODAL {animation.toUpperCase()}</Text>
            </TouchableOpacity>

            <Modal
                animationType={animation}
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}   
            >
                <TouchableOpacity
                    style={modalStyle.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setVisible(false)}
                >
                    <View style={modalStyle.modalCard}>
                        <View style={[modalStyle.colorIndicator, {backgroundColor: themeColor}]}/>

                        <Text style={modalStyle.modalTitle}>Animação {animation}</Text>

                        <Text style={modalStyle.modalBody}>
                            Esta transição demonstra o comportamento nativo do tipo {animation}
                        </Text>

                        <TouchableOpacity
                            style={modalStyle.closeButton}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={modalStyle.closeButtonText}>FECHAR</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

export default CustomModalScreen;