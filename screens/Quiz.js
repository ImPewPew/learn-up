import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState([
        {
            question: 'Who Developed Java??',
            options: ['James Gosling', 'Charles Darwin', 'Albert Einstein', 'Bill Gates'],
            correctAnswer: 'James Gosling',
        },
        {
            question: 'What are not the features of JAVA?',
            options: ['Inheritance', 'Encapsulation', 'Abstraction', 'Globalization'],
            correctAnswer: 'Globalization',
        },
        {
            question: 'Which company originally developed Java?',
            options: ['Sun Microsystems', 'Microsoft', 'IBM', 'Google'],
            correctAnswer: 'Sun Microsystems',
        },
        {
            question: 'In Java, which keyword is used to define a constant or unchangeable variable?',
            options: ['final', 'static', 'const', 'immutable'],
            correctAnswer: 'final',
        },
        {
            question: 'What is the Java Virtual Machine (JVM) responsible for?',
            options: ['Compiling Java code', 'Running Java applications', 'Managing database connections', 'Creating user interfaces'],
            correctAnswer: 'Running Java applications',
        },
        {
            question: 'Which Java data type is used to represent whole numbers?',
            options: ['double', 'int', 'char', 'boolean'],
            correctAnswer: 'int',
        },
        {
            question: 'What is the purpose of the "break" statement in Java?',
            options: ['Terminate the current loop or switch statement', 'Print text to the console', 'Create a new variable', 'Define a function'],
            correctAnswer: 'Terminate the current loop or switch statement',
        },
        {
            question: 'Which Java keyword is used to create a subclass that inherits from another class?',
            options: ['extend', 'super', 'implements', 'abstract'],
            correctAnswer: 'extend',
        },

    ]);


    const startQuiz = () => {
        // Navigate to the quiz questions screen and pass the questions
        navigation.navigate('QuizQuestions', { questions });
    };

    return (
        <View style={styles.container}>
            <View style={styles.quizContainer}>
                <Text style={styles.quizTitle}>Welcome to the Quiz!</Text>
                <Text style={styles.quizDescription}>Test your knowledge with our quiz.</Text>
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={startQuiz}
                >
                    <Text style={styles.startButtonText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    quizContainer: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    },
    quizTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    quizDescription: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    startButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    startButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Quiz;
