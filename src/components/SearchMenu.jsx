import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { TextInput, Menu } from "react-native-paper";
import { Calendar } from "react-native-calendars";

import nucleosData from "../assets/Nucleos_Origen_Destino.json";

const SearchMenu = () => {
  // Hooks
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [visible, setVisible] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    console.log("Buscar autobuses con destino:", destination, "y fecha:", date);
  };

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate.dateString);
    setShowCalendar(false);
  };

  const handleCalendarPress = () => {
    setShowCalendar(true);
  };

  // Función para filtrar las sugerencias de paradas de autobús
  const filterSuggestions = (text) => {
    const filteredSuggestions = nucleosData.nucleos.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Función para manejar el cambio en el campo de entrada
  const handleInputChange = (text) => {
    setDestination(text);
    filterSuggestions(text);
  };

  // Función para manejar la selección de una sugerencia
  const handleSuggestionSelect = (item) => {
    setDestination(item);
    setSuggestions([]);
  };

  // Renderizado de elementos de sugerencia
  const renderSuggestion = ({ item }) => (
    <Text
      style={styles.suggestionItem}
      onPress={() => handleSuggestionSelect(item)}
    >
      {item}
    </Text>
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowCalendar(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Bus Puerto</Text>
          <Text style={styles.subtitle}>Introduce tu destino.</Text>
        </View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder="Introduce núcleo destino"
            value={destination}
            onChangeText={handleInputChange}
          />

          <FlatList
            data={suggestions}
            renderItem={renderSuggestion}
            keyExtractor={(item, index) => index.toString()}
            style={styles.suggestionsContainer}
          />

          <Pressable onPress={handleCalendarPress}>
            <TextInput
              style={styles.input}
              label="Fecha"
              placeholder="Fecha"
              value={date}
              editable={false}
            />
          </Pressable>
          {showCalendar && (
            <View ref={calendarRef}>
              <Calendar
                onDayPress={handleDateSelect}
                markedDates={{
                  [date]: {
                    selected: true,
                    marked: true,
                    selectedColor: "#000",
                  },
                }}
              />
            </View>
          )}
          <Pressable style={styles.button} onPress={handleSearch}>
            <Text style={styles.button_text}>Buscar</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  inputs: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  suggestionsContainer: {
    maxHeight: 100,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#000",
  },

  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default SearchMenu;
