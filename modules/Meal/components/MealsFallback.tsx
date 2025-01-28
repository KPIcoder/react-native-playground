import {Text} from 'react-native';
import {Link} from "expo-router";
import Card from "@/ui-kit/Card";

export default function MealsFallback() {
    return (
        <>
            <Card title={'Your meals are missing :('} subtitle={'Looks like you haven\'t added any meals yet...'} />
            <Text style={{textAlign: 'center'}}>Go to <Link style={{ color: 'blue' }} href='/manage'>Manage</Link> to add Meals</Text>
        </>
    )
}