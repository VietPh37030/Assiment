import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      CartPrice: 0,
      FavoristList: [],
      Cartlist: [],
      HistoryList: [],
    }),
    {name: 'coffee-app', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
// import {create} from 'zustand';: Dòng này import hàm create từ thư viện Zustand. Hàm create được sử dụng để tạo một store Zustand mới.

// import {produce} from 'immer';: Dòng này import hàm produce từ thư viện Immer. Immer là một thư viện giúp tạo ra một bản sao có thể biến đổi của một đối tượng.

// import {persist, createJSONStorage} from 'zustand/middleware';: Dòng này import hàm persist và createJSONStorage từ middleware của Zustand. Middleware trong Zustand được sử dụng để xử lý việc lưu trữ trạng thái ứng dụng.

// import AsyncStorage from '@react-native-async-storage/async-storage';: Dòng này import AsyncStorage từ thư viện @react-native-async-storage/async-storage. AsyncStorage là một cơ chế lưu trữ dữ liệu trong React Native.

// CoffeeData và BeansData: Đây là các tập hợp dữ liệu về cà phê và hạt cà phê được import từ các file CoffeeData.js và BeansData.js. Có vẻ như chúng chứa thông tin về danh sách sản phẩm cà phê và hạt cà phê.

// export const useStore = create(...): Đoạn mã này tạo một store Zustand mới với các trạng thái được khởi tạo ban đầu. Hàm persist được sử dụng để lưu trữ trạng thái của store vào AsyncStorage. Cụ thể:

// Các trạng thái ban đầu bao gồm CoffeeList, BeansList, CartPrice, FavoristList, Cartlist, và HistoryList.
// createJSONStorage được sử dụng để tạo một cơ chế lưu trữ JSON cho việc lưu trữ trạng thái của store.
// name: 'coffee-app' xác định tên của store, cần thiết để phân biệt các store khi lưu trữ vào AsyncStorage.
// Tóm lại, đoạn mã này tạo ra một store Zustand để quản lý trạng thái của ứng dụng, bao gồm dữ liệu về sản phẩm cà phê, giá trị giỏ hàng, danh sách sản phẩm yêu thích, lịch sử đơn hàng, v.v. Nó sử dụng AsyncStorage để lưu trữ trạng thái của store sau mỗi lần cập nhật.
