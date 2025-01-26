import {View, Text} from "react-native";
import React from "react";
import {useQuery} from "@tanstack/react-query";

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json() as unknown as {name: string}[];
};

export default function HomeScreen() {
    const { data, error, isLoading } = useQuery({ queryKey: ['users'], queryFn: fetchUsers })


    return (
        <View style={[styles.container]}>
                {data?.map((user, index) => (<Text key={index}>{user.name}</Text>))}
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
}