import AddUsers from "@/app/components/AddUsers";
import UserList from "@/app/components/UserList"


export default function Home() {
  return (
    <>
      <div className="_Parent">
        <AddUsers />
        <UserList />
      </div>
    </>
  );
}
