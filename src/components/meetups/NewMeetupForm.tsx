import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useRef, FormEvent } from 'react';
import { title } from 'process';

function NewMeetupForm(props:any) {
  const titleInputRef = useRef<HTMLInputElement>(null!);
  const imageInputRef = useRef<HTMLInputElement>(null!);
  const addressInputRef = useRef<HTMLInputElement>(null!);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null!);
  function submitHandler(e: FormEvent) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData)
    // console.log(meetupData)
    // titleInputRef.current.value = ''
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            rows={5}
            required
            id='description'
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
