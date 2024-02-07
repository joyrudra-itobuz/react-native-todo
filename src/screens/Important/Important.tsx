import {View, Text} from 'react-native';
import React from 'react';
import HomeLayout from '../../components/global/Layouts/HomeLayout';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const Important = gestureHandlerRootHOC(() => {
  return (
    <HomeLayout>
      <View>
        <Text>Important</Text>
      </View>
    </HomeLayout>
  );
});

export default Important;
