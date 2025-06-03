import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function TabLayout() {
  return (
    <Tabs>
      
      <Tabs.Screen name="index" options={{title:"Home",tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />}} />
      <Tabs.Screen name="post" options={{title:"Post",tabBarIcon: ({ color }) => (
            <FontAwesome name="pencil-square-o" size={24} color={color} />
          ),}} />
      <Tabs.Screen name="profile" options={{title:"Profile",tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),}}/>
    </Tabs>
  );
}
