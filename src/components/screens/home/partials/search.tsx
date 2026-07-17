import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const inputKeyDownHandler = (event: any) => {
    if (event.code == 'Enter' && value) {
      navigate(`/shop?name=${value}`);
    }
  };

  const iconClickHandler = () => {
    if (value) {
      navigate(`/shop?name=${value}`);
    }
  };
  return (
    <div className="pt-10">
      <h2 className="tracking-hero text-center text-xl transition-all md:text-3xl">
        بهترین قیمت و تنوع لوازم خانگی در هومانو
      </h2>
      <div className="relative mx-auto mt-4 w-full md:!w-max">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={inputKeyDownHandler}
          type="text"
          placeholder="کالای مورد نظر را جستجو کنید..."
          className="border-neutral-03 h-14 w-full rounded-lg border py-2 pr-3 pl-12 outline-0 placeholder:text-gray-400 md:!w-[650px]"
        />
        <SearchIcon
          onClick={iconClickHandler}
          className="absolute top-4 left-3 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Search;
