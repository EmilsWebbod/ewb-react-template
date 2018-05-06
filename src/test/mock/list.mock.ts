
import {mockSecondaries} from "./secondary.mock";

const mockList = [{
  id: '1',
  images: ['img:7'],
  text: 'Fancy pants'
}];

const mockList2 = [{
  id: '2',
  images: ['img:1', 'img:2'],
  text: 'Facony Pants 2!'
}, {
  id: '3',
  images: ['img:1', 'img:3'],
  text: 'Man pants'
}];

const mockList3 = [{
  id: '4',
  images: ['img:1', 'img:2'],
  text: 'Super Nice Pants!'
}, {
  id: '5',
  images: ['img:1', 'img:3'],
  text: 'Long Superman Pants'
}, {
  id: '6',
  images: ['imd:5', 'img6'],
  text: 'Short Shorts'
}];

const mockSuperList = [{
  data: mockList,
  id:   mockSecondaries[1].secondary[0].filters[0].id
}, {
  data: mockList2,
  id:   mockSecondaries[1].secondary[0].filters[1].id
}, {
  data: mockList3,
  id:   mockSecondaries[1].secondary[1].filters[0].id
}];

export {mockSuperList, mockList, mockList2, mockList3};
