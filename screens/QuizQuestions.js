import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizQuestions = ({ navigation, route }) => {
    const { questions } = route.params;
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Shuffle the questions and select the first 5
        const shuffled = shuffleArray(questions).slice(0, 5);
        setShuffledQuestions(shuffled);
    }, []);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const nextQuestion = () => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            if (selectedAnswer === shuffledQuestions[currentQuestionIndex].correctAnswer) {
                setScore(score + 1);
            }
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            setShowResult(true);
        }
    };
    const renderOptions = () => {
        return questions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity
                key={index}
                style={[
                    styles.option,
                    selectedAnswer === option ? styles.selectedOption : null,
                ]}
                onPress={() => setSelectedAnswer(option)}
                disabled={showResult}
            >
                <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
        ));
    };


    return (
        <View style={styles.container}>
            <View style={styles.quizContainer}>
                {showResult ? (
                    <>
                        <Text style={styles.resultText}>
                            You have completed the quiz!
                        </Text>
                        <Text style={styles.resultText}>
                            Your Score: {score} out of 5
                        </Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.questionText}>
                            {questions[currentQuestionIndex].question}
                        </Text>
                        {renderOptions()}
                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={nextQuestion}
                            disabled={!selectedAnswer}
                        >
                            <Text style={styles.nextButtonText}>
                                Next Question
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
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
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    option: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#e1f5fe',
        marginBottom: 10,
    },
    selectedOption: {
        backgroundColor: '#64b5f6',
    },
    optionText: {
        fontSize: 16,
    },
    nextButton: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default QuizQuestions;
