import _ from 'lodash';
import * as types from '../core/common/action.types';

const defaultstate = {
  toeicSchedule: [
    {
      Name_Schadule: "Speaking",
      Data: "1/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "Write",
      Data: "2/3/2019",
      Location: "DH Qui Nhon",
    },
    {
      Name_Schadule: "Listening",
      Data: "5/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "adc",
      Data: "4/3/2019",
      Location: "DH Qui Nhon",
    },
    {
      Name_Schadule: "toiec 5",
      Data: "6/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "toiec 6",
      Data: "7/3/2019",
      Location: "DH Qui Nhon",
    },
    {
      Name_Schadule: "toiec 7",
      Data: "9/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "toiec 8",
      Data: "8/3/2019",
      Location: "DH Qui Nhon",
    },
    {
      Name_Schadule: "toiec 9",
      Data: "12/3/2019",
      Location: "DH Qui Nhon",
    },
    {
      Name_Schadule: "toiec 10",
      Data: "11/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "tuoihahaa",
      Data: "15/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "hihihi",
      Data: "13/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "working",
      Data: "18/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "todoin",
      Data: "17/3/2019",
      Location: "75 Mai Xuan Thuong",
    },
    {
      Name_Schadule: "hoaga",
      Data: "31/4/2019",
      Location: "75 Mai Xuan Thuong",
    },
  ],
  loading: false
}

const IntershipReducer = function (state = defaultstate, action) {
  switch (action.type) {
    case types.GET_TOEIC_SCHEDULE_LIST: {
      return _.assign({}, state, { toeicSchedule: action.toeicSchedule, loading: true })
    }
    default: {
      return state;
    }
  }
};

export default IntershipReducer;