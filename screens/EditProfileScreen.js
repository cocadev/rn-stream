import React from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import EditProfileForm from '../components/EditProfileForm';
import { BackButton } from 'expo-activity-feed';
import type { NavigationScreen } from 'expo-activity-feed';
import type { NavigationEventSubscription } from 'react-navigation';

type Props = {|
  navigation: NavigationScreen,
|};

export default class EditProfileScreen extends React.Component<Props> {
  _navListener: NavigationEventSubscription;

  static navigationOptions = ({ navigation }: Props) => ({
    title: 'EDIT PROFILE',
    headerRight: (
      <TouchableOpacity onPress={navigation.getParam('saveFunc')}>
        <Text>Save</Text>
      </TouchableOpacity>
    ),
    headerLeft: <BackButton pressed={() => navigation.goBack()} blue />,
    headerStyle: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
    },
  });

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }

  render() {
    return (
      <EditProfileForm
        registerSave={(saveFunc) => {
          this.props.navigation.setParams({ saveFunc });
        }}
      />
    );
  }
}
