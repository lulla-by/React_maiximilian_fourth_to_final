import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';

function MeetupItem(props) {

  const router = useRouter()
  function showDetailsHandeler() {
    // push메서드 사용 시 새 페이지를 더미페이지에 연결함 => Link 컴포넌트를 사용하는 것이나 마찬가지
    router.push(`/${props.id}`)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandeler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
