import { createClient } from '@/app/lib/client'
import { useEffect, useState } from 'react'

export const useCurrentUserImage = () => {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserImage = async () => {
      const { data, error } = await createClient().auth.getSession()
      if (error) {
        console.error(error)
      }

      setImage(data.session?.user.user_metadata.avatar_url ?? null)
    }
    fetchUserImage()
  }, [])

  return image
}
