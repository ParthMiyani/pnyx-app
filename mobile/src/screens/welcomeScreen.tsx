import * as React from 'react';
import { Suspense } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import images from '../assets/images/images';
import WelcomeScreenSwipeButton from '../components/WelcomeScreenSwipeButton';
import { Canvas } from "@react-three/fiber/native";
import Model from '../assets/public/components/Cube';
import ModelViewer from "../assets/public/components/ModelViewer.jsx";
import useControls from 'r3f-native-orbitcontrols';
import { OrbitControls } from "@react-three/drei";

export default function WelcomeScreen({navigation}: {navigation: any}) {
  const [OrbitControls, events] = useControls();
  return (
    <View style={styles.container}>
      {/* <ModelViewer modelPath={"../assets/public/models/Model.glb"} /> */}
      
      <Text style={styles.headingText}>WELCOME TO</Text>
      <Text style={styles.headingText}>PNYX</Text>
      {/* <Image style={styles.cube} source={images.cubeImage} /> */}
      <View style={styles.modelContainer} {...events}>
        <Canvas> 
          {/* need to fix camera angle */}
          {/* camera={{ fov: 64, position: [-2, 2, 0] }} */} 
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['purple', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['purple', 5]} />
          <directionalLight position={[0, 0, 1]} args={['purple', 5]} />
          <directionalLight position={[0, 0, -1]} args={['purple', 5]} />
          <directionalLight position={[0, 1, 0]} args={['purple', 5]} />
          <directionalLight position={[0, -1, 0]} args={['purple', 5]} />
          <Suspense fallback={null}>
             <Model />
          </Suspense>
        </Canvas>
      </View>
      <Text style={styles.subText}>
        DISCOVER TRACKS AND{'\n'}SHARE COLLECTIONS{'\n'}WITH LIKE-MINDED FRIENDS
      </Text>
      <WelcomeScreenSwipeButton
        onSwipeSuccess={() => navigation.navigate('Genres')}
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.accountText}>Have an account</Text>
        <Text style={styles.loginText}>Log In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: 30,
    textAlign: 'center',
    color:'#FFFFFF',
  },
  modelContainer: {
    flex: 1,
  },
  cube: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  subText: {
    fontSize: 24,
    marginVertical: 8,
    textAlign: 'center',
    color: 'white',
  },
  accountText: {
    fontSize: 14,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    lineHeight: 28,
    color: 'white',
  },
  loginText: {
    fontSize: 14,
    fontFamily: 'DM Sans',
    fontWeight: '400',
    textDecorationLine: 'underline',
    lineHeight: 28,
    color: 'white',
  },
});
