import { FC, ReactElement, useState, ChangeEvent, FormEvent } from 'react'
import './FormAction.scss'

const FormAction: FC = (): ReactElement => {
  const [ formData, setFormData ] = useState({ title: '', description: '' })
  const [ isPending, setIsPending ] = useState<boolean>(false)
  const [ responseMessage, setResponseMessage ] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description
        }),
      });
      const result = await response.json();

      setFormData({ title: '', description: '' })
      setIsPending(false)
      setResponseMessage(`Product added successfully with ID: ${result.id}`);
    } catch (error) {
      setIsPending(false)
      setResponseMessage('Error submitting the form. Please try again later');
      console.error(error);
    }
  }

  return (
    <section className="action">
      <h1 className='action__title'>Add a New Product</h1>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder='Title...'
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder='Description...'
          required
        />
  
        <button disabled={isPending} type="submit">Submit</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </section>
  )
}

export default FormAction