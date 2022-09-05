import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    LayoutAnimation,
    View,
    Text,
    UIManager,
    TouchableOpacity,
    Platform,
    FlatList,
} from 'react-native';
import { styles } from "./styles";

//Dummy content to show
const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Item 1',
        subcategory: [
            { id: 1, val: 'Sub Cat 1' },
            { id: 3, val: 'Sub Cat 3' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 2',
        subcategory: [
            { id: 4, val: 'Sub Cat 4' },
            { id: 5, val: 'Sub Cat 5' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 3',
        subcategory: [
            { id: 7, val: 'Sub Cat 7' },
            { id: 9, val: 'Sub Cat 9' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 4',
        subcategory: [
            { id: 10, val: 'Sub Cat 10' },
            { id: 12, val: 'Sub Cat 2' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 5',
        subcategory: [
            { id: 13, val: 'Sub Cat 13' },
            { id: 15, val: 'Sub Cat 5' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 6',
        subcategory: [
            { id: 17, val: 'Sub Cat 17' },
            { id: 18, val: 'Sub Cat 8' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 7',
        subcategory: [{ id: 20, val: 'Sub Cat 20' }],
    },
    {
        isExpanded: false,
        category_name: 'Item 8',
        subcategory: [{ id: 22, val: 'Sub Cat 22' }],
    },
    {
        isExpanded: false,
        category_name: 'Item 9',
        subcategory: [
            { id: 26, val: 'Sub Cat 26' },
            { id: 27, val: 'Sub Cat 7' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 10',
        subcategory: [
            { id: 28, val: 'Sub Cat 28' },
            { id: 30, val: 'Sub Cat 0' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 11',
        subcategory: [{ id: 31, val: 'Sub Cat 31' }],
    },
    {
        isExpanded: false,
        category_name: 'Item 12',
        subcategory: [{ id: 34, val: 'Sub Cat 34' }],
    },
    {
        isExpanded: false,
        category_name: 'Item 13',
        subcategory: [
            { id: 38, val: 'Sub Cat 38' },
            { id: 39, val: 'Sub Cat 9' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 14',
        subcategory: [
            { id: 40, val: 'Sub Cat 40' },
            { id: 42, val: 'Sub Cat 2' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 15',
        subcategory: [
            { id: 43, val: 'Sub Cat 43' },
            { id: 44, val: 'Sub Cat 44' },
        ],
    },
];
const ExpandableComponent = ({ item, onClickFunction }) => {
    //Custom Component for the Expandable List
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded]);

    return (
        <View>
            {/*Header of the Expandable List Item*/}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClickFunction}
                style={styles.header}>
                <Text style={styles.headerText}>
                    {item.category_name}
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden',
                }}>
                {/*Content under the header of the Expandable List Item*/}
                {item.subcategory.map((item, key) => (
                    <TouchableOpacity
                        key={key}
                        style={styles.content}
                        onPress={
                            () => alert('Id: ' + item.id + ' val: ' + item.val)
                        }>
                        <Text style={styles.text}>
                            {key}. {item.val}
                        </Text>
                        <View style={styles.separator} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const App = () => {
    const [listDataSource, setListDataSource] = useState(CONTENT);
    const [multiSelect, setMultiSelect] = useState(false);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            // If multiple select is enabled
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            // If single select is enabled
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]['isExpanded'] =
                        !array[placeindex]['isExpanded'])
                    : (array[placeindex]['isExpanded'] = false),
            );
        }
        setListDataSource(array);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={styles.titleText}>Expandable List View</Text>
                    <TouchableOpacity
                        onPress={() => setMultiSelect(!multiSelect)}>
                        <Text
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                color: '#fff'
                            }}>
                            {multiSelect
                                ? 'Enable Single \n Expand'
                                : 'Enalble Multiple \n Expand'}
                        </Text>
                    </TouchableOpacity>
                </View>
                    <FlatList
                        data={listDataSource}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <ExpandableComponent
                                    key={item.category_name}
                                    onClickFunction={() => {
                                        updateLayout(index);
                                    }}
                                    item={item}
                                />
                            );
                        }}
                    />
            </View>
        </SafeAreaView>
    );
};

export default App;



