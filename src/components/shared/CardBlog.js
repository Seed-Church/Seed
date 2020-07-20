import React from "react";
// import Amp from "../../asset/img/amp.jpg";
// import Yuno from "../../asset/img/yuno.jpg";
// import bg from "../../asset/img/bg_test.jpg";
const CardBlog = () => {
  const mock = "https://tailwindcss.com/img/card-left.jpg";
  const mockpf = "https://tailwindcss.com/img/jonathan.jpg";
  return (
    <div className="flex flex-wrap mx-8 mb-6 mt-3">
      <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">6 ตุลาคม 2020</span>
          <div className="px-6 pb-2">
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
        <div className="mt-2">
          <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">
            ความแม่นนำในการออกแบบของนักพัฒนา
          </a>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur
            doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
            ratione libero!
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a className="text-blue-600 hover:underline" href="#">
            Read more
          </a>
          <div>
            <a className="flex items-center" href="#">
              <img
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                alt="avatar"
              />
              <h1 className="text-gray-700 font-bold">อาร์มเอง</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
