import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
import Button from '../../components/button/button';

export default function Categories() {
  const categories = useSelector(
    (store) => store.categories,
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <main className="h-[80vh] w-full flex flex-col gap-3   justify-center items-center">
      <Button
        handleClick={handleClick}
        text="Check Status"
      />
      <div className=" bg-inherit w-fit h-8 p-2 text-center text-3xl text-red-500">
        {categories}
      </div>
    </main>
  );
}
