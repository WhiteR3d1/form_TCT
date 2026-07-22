import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, }}>
      <Drawer screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#111111',
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerShadowVisible: false,
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: 220,
        },
        drawerActiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor: '#111111',
        drawerInactiveTintColor: '#8A8A8E',
        drawerLabelStyle: {
          fontWeight: '500',
        },
        drawerItemStyle: {
          borderRadius: 12,
          marginHorizontal: 10,
        },
      }} >
        <Drawer.Screen name="index" options={{
          title: "Home Screen",
          drawerLabel: "Home ",
        }} />
        <Drawer.Screen name="arith" options={{
          title: "Arithmetic",
          drawerLabel: "Arithmetic",
        }} />
        <Drawer.Screen name="form" options={{
          title: "Form",
          drawerLabel: "Form",
        }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

