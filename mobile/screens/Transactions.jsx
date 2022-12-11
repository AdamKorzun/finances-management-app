import * as React from 'react';
import {View, StyleSheet, ScrollView, RefreshControl} from "react-native";
import CategoryList from "../components/transactions/categories/CategoryList";
import {useCallback, useState} from "react";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function TransactionsPage() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(100).then(() => setRefreshing(false));
    }, []);

    return (
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
            <ScrollView>
                <View style={styles.container }>
                    <CategoryList refreshing={refreshing}/>
                </View>
            </ScrollView>
        </RefreshControl>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});