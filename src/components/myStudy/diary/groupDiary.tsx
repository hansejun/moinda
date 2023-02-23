import DiaryForm from "./diaryForm";
import DiaryList from "./diaryList";
import DiarySearch from "./diarySearch";
const GroupDiary = () => {
  return (
    <div className="flex h-full min-w-[59.3rem] flex-col space-y-[2.6rem]">
      <DiarySearch />
      <div className="flex h-full flex-col rounded-[1rem] bg-bgColor-100 pb-[3rem] ">
        <DiaryList />
        <DiaryForm />
      </div>
    </div>
  );
};

export default GroupDiary;
