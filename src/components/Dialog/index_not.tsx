import React, {useState} from 'react';
import { Text, View } from 'native-base';
import { styles } from './styles'
import { Alert, TouchableOpacity, Modal } from 'react-native';

interface ExcluirItemDialogProps {
    isVisible: boolean;
    onCancel: () => void;
    onConfirm: () => void;
  }
  
export const ExcluirItemDialog: React.FC<ExcluirItemDialogProps> = ({ isVisible, onCancel, onConfirm }) => {
    if (!isVisible) return null;

const [modalVisible, setModalVisible] = useState(false); 

const modalHeader=(
    <View style={styles.modalHeader}>
      <Text style={styles.title}>Delete Your Account</Text>
      <View style={styles.divider}></View>
    </View>
)

const modalBody=(
    <View style={styles.modalBody}>
      <Text style={styles.bodyText}>Are you sure you want to delete your account ?</Text>
    </View>
  )

  const modalFooter=(
    <View style={styles.modalFooter}>
      <View style={styles.divider}></View>
      <View style={{flexDirection:"row-reverse",margin:10}}>
        <TouchableOpacity style={{...styles.actions,backgroundColor:"#db2828"}} 
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={styles.actionText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.actions,backgroundColor:"#21ba45"}}>
          <Text style={styles.actionText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const modalContainer=(
    <View style={styles.modalContainer}>
      {modalHeader}
      {modalBody}
      {modalFooter}
    </View>
  )

  const modal = (
    <Modal
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.modal}>
        <View>
          {modalContainer}
        </View>
      </View>
    </Modal>
)
          };
    