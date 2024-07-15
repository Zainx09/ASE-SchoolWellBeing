// src/redux/actions/dataActions.js

// Action Types
export const FETCH_ADMIN_DATA = 'FETCH_ADMIN_DATA';
export const FETCH_STUDENT_DATA = 'FETCH_STUDENT_DATA';
export const FETCH_ACTIONS_DATA = "FETCH_ATIONS_DATA"

export const fetchActionRequiredData = () => {
  const hardcodedActionsData = {
    "mood": {
      "1-3": {
        "mood_action_1": "Encourage more social interactions",
        "mood_action_2": "Schedule a meeting with a counselor",
        "mood_action_3": "Provide positive feedback and support"
      },
      "4-6": {
        "mood_action_1": "Maintain regular check-ins",
        "mood_action_2": "Encourage participation in favorite activities"
      },
      "7-10": {
        "mood_action_1": "Continue current support strategies",
        "mood_action_2": "Reward positive mood with recognition"
      }
    },
    "stress": {
      "1-3": {
        "stress_action_1": "Continue stress management practices",
        "stress_action_2": "Encourage regular physical activity"
      },
      "4-6": {
        "stress_action_1": "Introduce relaxation techniques",
        "stress_action_2": "Offer counseling support",
        "stress_action_3": "Encourage time management skills"
      },
      "7-10": {
        "stress_action_1": "Schedule immediate counseling sessions",
        "stress_action_2": "Reduce workload if possible",
        "stress_action_3": "Involve parents or guardians"
      }
    },
    "physicalActivity": {
      "1-3": {
        "physicalActivity_action_1": "Encourage participation in sports",
        "physicalActivity_action_2": "Increase Physical Education activities",
        "physicalActivity_action_3": "Promote active breaks during classes"
      },
      "4-6": {
        "physicalActivity_action_1": "Maintain current activity levels",
        "physicalActivity_action_2": "Introduce variety in physical activities"
      },
      "7-10": {
        "physicalActivity_action_1": "Encourage participation in competitive sports",
        "physicalActivity_action_2": "Reward physical activity achievements"
      }
    },
    "focus": {
      "1-3": {
        "focus_action_1": "Reduce distractions in learning environment",
        "focus_action_2": "Provide additional support or tutoring",
        "focus_action_3": "Encourage breaks during study"
      },
      "4-6": {
        "focus_action_1": "Monitor progress and provide feedback",
        "focus_action_2": "Introduce focus-enhancing activities"
      },
      "7-10": {
        "focus_action_1": "Reward high focus levels",
        "focus_action_2": "Involve student in teaching peers"
      }
    },
    "energy": {
      "1-3": {
        "energy_action_1": "Encourage balanced diet and regular sleep",
        "energy_action_2": "Introduce energy-boosting activities",
        "energy_action_3": "Monitor for underlying health issues"
      },
      "4-6": {
        "energy_action_1": "Maintain balanced lifestyle",
        "energy_action_2": "Encourage regular exercise"
      },
      "7-10": {
        "energy_action_1": "Acknowledge and reward high energy levels",
        "energy_action_2": "Involve in leadership activities"
      }
    },
    "socialInteractions": {
      "1-3": {
        "socialInteractions_action_1": "Encourage group activities",
        "socialInteractions_action_2": "Provide social skills training",
        "socialInteractions_action_3": "Monitor for bullying or exclusion"
      },
      "4-6": {
        "socialInteractions_action_1": "Promote participation in clubs or teams",
        "socialInteractions_action_2": "Encourage positive peer relationships"
      },
      "7-10": {
        "socialInteractions_action_1": "Reward positive social interactions",
        "socialInteractions_action_2": "Involve in mentoring programs"
      }
    },
    "diet": {
      "1-3": {
        "diet_action_1": "Educate on healthy eating",
        "diet_action_2": "Involve parents in meal planning",
        "diet_action_3": "Monitor for eating disorders"
      },
      "4-6": {
        "diet_action_1": "Promote balanced diet",
        "diet_action_2": "Introduce healthy eating challenges"
      },
      "7-10": {
        "diet_action_1": "Reward healthy eating habits",
        "diet_action_2": "Involve in cooking or nutrition classes"
      }
    },
    "classParticipation": {
      "1-3": {
        "classParticipation_action_1": "Encourage active participation",
        "classParticipation_action_2": "Provide opportunities for student to lead activities",
        "classParticipation_action_3": "Monitor for disengagement"
      },
      "4-6": {
        "classParticipation_action_1": "Maintain regular encouragement",
        "classParticipation_action_2": "Provide positive reinforcement for participation"
      },
      "7-10": {
        "classParticipation_action_1": "Reward high participation levels",
        "classParticipation_action_2": "Involve in peer tutoring"
      }
    },
    "homework": {
      "1-3": {
        "homework_action_1": "Provide additional support or tutoring",
        "homework_action_2": "Encourage regular study schedule",
        "homework_action_3": "Monitor for homework completion"
      },
      "4-6": {
        "homework_action_1": "Maintain current support strategies",
        "homework_action_2": "Provide positive feedback for homework completion"
      },
      "7-10": {
        "homework_action_1": "Reward consistent homework completion",
        "homework_action_2": "Involve in peer study groups"
      }
    },
    // "AvgRatings": {
    //   "1-3": {
    //     "overall_action_1": "Implement comprehensive wellness programs",
    //     "overall_action_2": "Encourage mindfulness activities",
    //     "overall_action_3": "Enhance communication between students, parents, and teachers"
    //   },
    //   "4-6": {
    //     "overall_action_1": "Maintain regular check-ins",
    //     "overall_action_2": "Promote balance between school and personal life"
    //   },
    //   "7-10": {
    //     "overall_action_1": "Reward positive well-being",
    //     "overall_action_2": "Encourage leadership roles"
    //   }
    // }
  }
  
  return {
    type: FETCH_ACTIONS_DATA,
    payload: hardcodedActionsData,
  };
};

export const fetchStudentData = () => {
  const hardcodedStudentData = [
    {
      id: '1',
      name: 'Morphis J',
      class:2,
      section:'a',
      age:8,
      gender:'male',
      reports: [
        { date: '2024-07-01', mood: 3, stress: 2, physicalActivity: 3, focus: 6, energy: 5, socialInteractions: 4, diet: 8, classParticipation: 7, homework: 9, wellBeing: 6 },
        { date: '2024-07-02', mood: 4, stress: 3, physicalActivity: 4, focus: 7, energy: 6, socialInteractions: 5, diet: 7, classParticipation: 8, homework: 8, wellBeing: 7 },
        { date: '2024-07-03', mood: 5, stress: 1, physicalActivity: 5, focus: 8, energy: 7, socialInteractions: 6, diet: 9, classParticipation: 9, homework: 7, wellBeing: 8 },
        { date: '2024-07-04', mood: 2, stress: 4, physicalActivity: 2, focus: 5, energy: 4, socialInteractions: 3, diet: 6, classParticipation: 6, homework: 6, wellBeing: 5 },
        { date: '2024-07-05', mood: 4, stress: 2, physicalActivity: 3, focus: 6, energy: 5, socialInteractions: 4, diet: 8, classParticipation: 7, homework: 9, wellBeing: 6 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '2',
      name: 'Student B',
      class:2,
      section:'b',
      age:8,
      gender:'female',
      reports: [
        { date: '2024-07-01', mood: 5, stress: 1, physicalActivity: 5, focus: 8, energy: 7, socialInteractions: 6, diet: 9, classParticipation: 9, homework: 7, wellBeing: 8 },
        { date: '2024-07-02', mood: 3, stress: 3, physicalActivity: 4, focus: 7, energy: 6, socialInteractions: 5, diet: 7, classParticipation: 8, homework: 8, wellBeing: 7 },
        { date: '2024-07-03', mood: 2, stress: 4, physicalActivity: 2, focus: 5, energy: 4, socialInteractions: 3, diet: 6, classParticipation: 6, homework: 6, wellBeing: 5 },
        { date: '2024-07-04', mood: 4, stress: 2, physicalActivity: 3, focus: 6, energy: 5, socialInteractions: 4, diet: 8, classParticipation: 7, homework: 9, wellBeing: 6 },
        { date: '2024-07-05', mood: 3, stress: 3, physicalActivity: 4, focus: 7, energy: 6, socialInteractions: 5, diet: 7, classParticipation: 8, homework: 8, wellBeing: 7 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '3',
      name: 'Student C',
      class:2,
      section:'a',
      age:7,
      gender:'male',
      reports: [
        { date: '2024-07-01', mood: 4, stress: 2, physicalActivity: 3, focus: 6, energy: 5, socialInteractions: 4, diet: 8, classParticipation: 7, homework: 9, wellBeing: 6 },
        { date: '2024-07-02', mood: 2, stress: 4, physicalActivity: 2, focus: 5, energy: 4, socialInteractions: 3, diet: 6, classParticipation: 6, homework: 6, wellBeing: 5 },
        { date: '2024-07-03', mood: 3, stress: 3, physicalActivity: 4, focus: 7, energy: 6, socialInteractions: 5, diet: 7, classParticipation: 8, homework: 8, wellBeing: 7 },
        { date: '2024-07-04', mood: 5, stress: 1, physicalActivity: 5, focus: 8, energy: 7, socialInteractions: 6, diet: 9, classParticipation: 9, homework: 7, wellBeing: 8 },
        { date: '2024-07-05', mood: 4, stress: 2, physicalActivity: 3, focus: 6, energy: 5, socialInteractions: 4, diet: 8, classParticipation: 7, homework: 9, wellBeing: 6 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '4',
      name: 'Student D',
      class: 3,
      section: 'c',
      age: 9,
      gender: 'female',
      reports: [
        { date: '2024-07-01', mood: 2, stress: 4, physicalActivity: 1, focus: 5, energy: 3, socialInteractions: 2, diet: 6, classParticipation: 5, homework: 6, wellBeing: 4 },
        { date: '2024-07-02', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 4, socialInteractions: 3, diet: 7, classParticipation: 6, homework: 5, wellBeing: 5 },
        { date: '2024-07-03', mood: 4, stress: 2, physicalActivity: 3, focus: 7, energy: 5, socialInteractions: 4, diet: 8, classParticipation: 7, homework: 4, wellBeing: 6 },
        { date: '2024-07-04', mood: 5, stress: 1, physicalActivity: 4, focus: 8, energy: 6, socialInteractions: 5, diet: 9, classParticipation: 8, homework: 3, wellBeing: 7 },
        { date: '2024-07-05', mood: 4, stress: 2, physicalActivity: 3, focus: 7, energy: 5, socialInteractions: 4, diet: 8, classParticipation: 7, homework: 4, wellBeing: 6 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '5',
      name: 'Student E',
      class: 1,
      section: 'b',
      age: 7,
      gender: 'male',
      reports: [
        { date: '2024-07-01', mood: 3, stress: 3, physicalActivity: 3, focus: 5, energy: 4, socialInteractions: 3, diet: 7, classParticipation: 6, homework: 8, wellBeing: 5 },
        { date: '2024-07-02', mood: 4, stress: 2, physicalActivity: 2, focus: 6, energy: 5, socialInteractions: 4, diet: 8, classParticipation: 7, homework: 7, wellBeing: 6 },
        { date: '2024-07-03', mood: 5, stress: 1, physicalActivity: 1, focus: 7, energy: 6, socialInteractions: 5, diet: 9, classParticipation: 8, homework: 6, wellBeing: 7 },
        { date: '2024-07-04', mood: 4, stress: 2, physicalActivity: 2, focus: 8, energy: 7, socialInteractions: 6, diet: 8, classParticipation: 9, homework: 5, wellBeing: 8 },
        { date: '2024-07-05', mood: 3, stress: 3, physicalActivity: 3, focus: 5, energy: 4, socialInteractions: 7, diet: 6, classParticipation: 8, homework: 4, wellBeing: 5 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '6',
      name: 'Student F',
      class: 3,
      section: 'a',
      age: 9,
      gender: 'female',
      reports: [
        { date: '2024-07-01', mood: 2, stress: 4, physicalActivity: 4, focus: 6, energy: 5, socialInteractions: 4, diet: 7, classParticipation: 5, homework: 6, wellBeing: 4 },
        { date: '2024-07-02', mood: 3, stress: 3, physicalActivity: 3, focus: 7, energy: 6, socialInteractions: 5, diet: 8, classParticipation: 6, homework: 5, wellBeing: 5 },
        { date: '2024-07-03', mood: 4, stress: 2, physicalActivity: 2, focus: 8, energy: 7, socialInteractions: 6, diet: 9, classParticipation: 7, homework: 4, wellBeing: 6 },
        { date: '2024-07-04', mood: 5, stress: 1, physicalActivity: 3, focus: 7, energy: 8, socialInteractions: 7, diet: 8, classParticipation: 8, homework: 3, wellBeing: 7 },
        { date: '2024-07-05', mood: 4, stress: 2, physicalActivity: 4, focus: 6, energy: 5, socialInteractions: 4, diet: 7, classParticipation: 5, homework: 2, wellBeing: 4 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '7',
      name: 'Student G',
      class: 2,
      section: 'c',
      age: 8,
      gender: 'male',
      reports: [
        { date: '2024-07-01', mood: 4, stress: 3, physicalActivity: 1, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-02', mood: 3, stress: 2, physicalActivity: 2, focus: 4, energy: 7, socialInteractions: 8, diet: 7, classParticipation: 8, homework: 7, wellBeing: 6 },
        { date: '2024-07-03', mood: 5, stress: 1, physicalActivity: 3, focus: 6, energy: 8, socialInteractions: 9, diet: 6, classParticipation: 7, homework: 6, wellBeing: 5 },
        { date: '2024-07-04', mood: 4, stress: 2, physicalActivity: 4, focus: 7, energy: 9, socialInteractions: 6, diet: 9, classParticipation: 6, homework: 5, wellBeing: 4 },
        { date: '2024-07-05', mood: 3, stress: 3, physicalActivity: 2, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 4, wellBeing: 7 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '8',
      name: 'Student H',
      class: 1,
      section: 'b',
      age: 7,
      gender: 'female',
      reports: [
        { date: '2024-07-01', mood: 5, stress: 2, physicalActivity: 4, focus: 6, energy: 5, socialInteractions: 4, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-02', mood: 4, stress: 1, physicalActivity: 3, focus: 7, energy: 6, socialInteractions: 5, diet: 8, classParticipation: 7, homework: 8, wellBeing: 7 },
        { date: '2024-07-03', mood: 3, stress: 2, physicalActivity: 2, focus: 8, energy: 7, socialInteractions: 6, diet: 9, classParticipation: 6, homework: 7, wellBeing: 8 },
        { date: '2024-07-04', mood: 2, stress: 3, physicalActivity: 1, focus: 9, energy: 8, socialInteractions: 7, diet: 8, classParticipation: 5, homework: 6, wellBeing: 7 },
        { date: '2024-07-05', mood: 1, stress: 4, physicalActivity: 2, focus: 7, energy: 9, socialInteractions: 8, diet: 7, classParticipation: 6, homework: 5, wellBeing: 6 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '9',
      name: 'Student I',
      class: 3,
      section: 'a',
      age: 9,
      gender: 'male',
      reports: [
        { date: '2024-07-01', mood: 4, stress: 1, physicalActivity: 3, focus: 7, energy: 6, socialInteractions: 5, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-02', mood: 3, stress: 2, physicalActivity: 2, focus: 6, energy: 5, socialInteractions: 4, diet: 7, classParticipation: 8, homework: 7, wellBeing: 6 },
        { date: '2024-07-03', mood: 2, stress: 3, physicalActivity: 1, focus: 5, energy: 4, socialInteractions: 3, diet: 6, classParticipation: 7, homework: 6, wellBeing: 5 },
        { date: '2024-07-04', mood: 1, stress: 4, physicalActivity: 4, focus: 4, energy: 3, socialInteractions: 2, diet: 5, classParticipation: 6, homework: 5, wellBeing: 4 },
        { date: '2024-07-05', mood: 3, stress: 2, physicalActivity: 2, focus: 5, energy: 4, socialInteractions: 3, diet: 6, classParticipation: 7, homework: 6, wellBeing: 5 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '10',
      name: 'Student J',
      class: 2,
      section: 'c',
      age: 8,
      gender: 'female',
      reports: [
        { date: '2024-07-01', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-02', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-03', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-04', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-05', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
    {
      id: '11',
      name: 'Student K',
      class: 1,
      section: 'a',
      age: 7,
      gender: 'male',
      reports: [
        { date: '2024-07-01', mood: 5, stress: 2, physicalActivity: 1, focus: 3, energy: 4, socialInteractions: 5, diet: 6, classParticipation: 7, homework: 8, wellBeing: 5 },
        { date: '2024-07-02', mood: 4, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 7, wellBeing: 6 },
        { date: '2024-07-03', mood: 3, stress: 4, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-04', mood: 2, stress: 5, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
        { date: '2024-07-05', mood: 1, stress: 4, physicalActivity: 2, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 4, wellBeing: 7 },
        { date: '2024-07-06', mood: 3, stress: 3, physicalActivity: 2, focus: 4, energy: 5, socialInteractions: 6, diet: 7, classParticipation: 8, homework: 9, wellBeing: 6 },
        { date: '2024-07-07', mood: 2, stress: 2, physicalActivity: 3, focus: 5, energy: 6, socialInteractions: 7, diet: 8, classParticipation: 9, homework: 8, wellBeing: 7 },
        { date: '2024-07-08', mood: 1, stress: 1, physicalActivity: 4, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 7, wellBeing: 8 },
        { date: '2024-07-09', mood: 2, stress: 2, physicalActivity: 5, focus: 7, energy: 8, socialInteractions: 9, diet: 10, classParticipation: 9, homework: 6, wellBeing: 7 },
        { date: '2024-07-10', mood: 3, stress: 3, physicalActivity: 2, focus: 6, energy: 7, socialInteractions: 8, diet: 9, classParticipation: 10, homework: 5, wellBeing: 8 },
      ],
    },
  ];
  return {
    type: FETCH_STUDENT_DATA,
    payload: hardcodedStudentData,
  };
};