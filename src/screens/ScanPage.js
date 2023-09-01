import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import GLOBAL from '../Global';

const ScanPage = () => {
  
  onSuccess = e => {
      console.log(e.data);
      GLOBAL.data.saldo =  GLOBAL.data.saldo - parseInt(e.data);
      Alert.alert("Berhasil Membaca QRCode");
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      showMarker={true}
      flashMode={RNCamera.Constants.FlashMode.off}
      ref={(node) => { scanner = node }}
      topContent={
        <Text style={styles.centerText}>
          Silahkan scan kamera anda ke gambar QRCode
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable} onPress={() => scanner.reactivate()} >
          <Text style={styles.buttonText}>Klik untuk Scan Ulang</Text>
        </TouchableOpacity>
      }
    />
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 42,
    color: "black",
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ScanPage;