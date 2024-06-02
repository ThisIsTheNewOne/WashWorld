import { useQuery } from "@tanstack/react-query";
import { UserQueries2 } from "../../userQuery/user.queries";
import { Role, User } from "../../store/userSlice";
import { Text, View, StyleSheet } from "react-native";

interface UserRolesProps {
 fullUser: User | null;
 type: string
}

const UsersRoleTypes = (props: UserRolesProps) => {
   const { fullUser, type } = props
   const id = fullUser?.id

  const fetchUserQuery = async (queryKey: any) => {
    console.log('queryKey:', queryKey);
    const keyArray = queryKey.queryKey;
    const [_, role, id] = keyArray; // Destructure the query key
    return await UserQueries2.fetchUser(role, id); // Call fetchUser with role and id
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["userRole", type, String(id)],
    queryFn: fetchUserQuery,
  });

  if (isPending) {
    return <Text style={styles.mainContainer}>Loading...</Text>;
  }

  if (isError) {
    return <Text style={styles.mainContainer}>Error: {error.message}</Text>;
  }

  return <View style={styles.mainContainer}>
    <Text >{data !== null && data !== undefined && data.role}</Text>
  </View>;
};

export default UsersRoleTypes;

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "red",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
    }
})