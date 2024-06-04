import useAuth from '@/hooks/queries/useAuth';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';
<<<<<<< HEAD
import useAuth from '@/hooks/queries/useAuth';
=======
import AuthStackNavigator from '../stack/AuthStackNavigator';
>>>>>>> 63731db (Googlemap 연동)

function RootNavigator() {
  const {isLogin} = useAuth();

  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
