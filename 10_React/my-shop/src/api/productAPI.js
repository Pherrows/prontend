// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용할 수 있도록 함수로 만듦

import axios from "axios";

// 상품 목록 조회
export const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Pherrows/db-shop/products"
    );

    if (response.status === 200) {
      // 요청에 대한 응답의 상태가 200 ok 일떄만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    // 서버가 죽었거나,인터넷이 끊겼거나, URL이 잘못됐을 떄 등
    console.error(error);
    throw error;
  }
};

// 특정 상품 조회

export const getProductsById = async (id) => {
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/Pherrows/db-shop/products/${id}`
    );

    if (response.status === 200) {
      // 요청에 대한 응답의 상태가 200 ok 일떄만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    // 서버가 죽었거나,인터넷이 끊겼거나, URL이 잘못됐을 떄 등
    console.error(error);
    throw error;
  }
};

// 만약 서버로 데이터를 보내야 한다면?
// json-server 이용 시 테스트 가능

export const addProduct = async (product) => {
  try {
    const response = await axios.post(`http://localhost:4000/products`, {
      product,
    });

    if (response.status === 200) {
      // 요청에 대한 응답의 상태가 200 ok 일떄만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    // 서버가 죽었거나,인터넷이 끊겼거나, URL이 잘못됐을 떄 등
    console.error(error);
    throw error;
  }
};

export const orderProduct = async (productId, orderCount) => {
  try {
    const response = await axios.post(`http://localhost:4000/products-drder`, {
      productId,
      orderCount,
    });

    if (response.status === 200) {
      // 요청에 대한 응답의 상태가 200 ok 일떄만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    // 서버가 죽었거나,인터넷이 끊겼거나, URL이 잘못됐을 떄 등
    console.error(error);
    throw error;
  }
};
