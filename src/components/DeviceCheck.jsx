import React, { useEffect, useState } from 'react'

const DeviceCheck = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isRealMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 1024

    setIsMobile(isRealMobile)
  }, [])

  if (!isMobile) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 text-white text-center z-50 flex items-center justify-center p-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">⚠ Только для компьютеров</h1>
        <p className="text-lg">Пожалуйста, зайдите на сайт с ноутбука или ПК чтобы увидеть результат.</p>
      </div>
    </div>
  )
}

export default DeviceCheck
