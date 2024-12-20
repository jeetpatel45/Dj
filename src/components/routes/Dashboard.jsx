// eslint-disable-next-line no-unused-vars
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex  bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 text-center">
          <img
            src="https://i0.wp.com/seamonsseeds.com/wp-content/uploads/2023/09/logo-250-x-60-e1723204883229.png?fit=183%2C61&ssl=1"
            alt="Logo"
            className="mx-auto h-20"
          />
        </div>
        <ul className="mt-6 grid gap-[13px]">
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Dashboard
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Real Time Tracking
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Employees
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Products
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Orders
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Collections
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Expenses
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Leave
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Tasks
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Customers
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Reports
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Announcements
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Complaints
          </li>
          <li className="py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-green-600 cursor-pointer">
            Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <input
            type="text"
            placeholder="Search Here"
            className=" ml-[250px] w-[35%] px-4 py-2 border border-gray-300 rounded-full focus:ring-green-500 focus:border-green-500"
          />
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-700">Mason Clark</div>
            <div className="text-xs text-green-500">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAllBMVEURrBH////r6+vq6urp6en29vbs7Ozy8vL4+Pj+/v719fX09PT7+/vv7+8AqQAgryCo3aid0Z317/UxsjHD58O42rhQuVDX5Nfj8+NYvlgApADl6eX0+/QArQCLzov/+/+AxoBqwWpJuEns+exzxnOv16+o1ag7tjvD3sPJ38nf6N99y32147XS6tKQzpCUzZRiwGLO7c6P32VTAAAUbklEQVR4nOVda3ubvs8OB3OGdukpa5NmPW1t13bb9/9yjyXZMgZDSAK0v+fvvZguKoPvYOzbkmwtck8W4ctSgpREvh+kUkjjQEoJXAPJj/VfjZ5foiJIUQEXUcrwhlAZb52EUopREaQSFeGGEd87RCmHKsKuUqAiVi5BsdANQ8nLQMLnJaBYLjrBlMeAyT4VTBAEqpFBEEJtrwylpB4oS0wPlCVCPahBj0GJwEjJz7iyAiMlrJyCRGBCqIL3jvgpOUjCVEEwoX5KgYrUZUAquEqmqwTlIktkyWJZcpCEFEoQkhyuCZZylmKtR1IS24qZXUWUWkqMZKrEpkqppayst6YmmYbVJAMgXohQFvwNC5Cw50QgqZ9LS4lDr/ClpDolXEztKnhr6p4BKHr0C8vicRX8hWOQBFcuuQp2ghSegq/HA8lP6NXr5tQASDC6dxfcVSPu0jl3adJLLb0i4i6NHRmlZhX+wrBlBfZ9jz/KQn849LnkfvvzLBofJXV9UMwaT9kBJh4KpuwAE04OJtsFJhgKJhgZTGbA+DD2dYMJ3GD0uFOoQSSFIQa7ZurFPNgkWi9FPfhm0hQVUSrtIcZUUS2TigQGRyUCAyOQ+makRG+GB067Cn4z1LAIG4aVM5Ayfkohh+Y0haHZl9+dlOTQLOcZKGqekdfwh4tBwrlA6YGEiiBFqFjSz2VVScJoudzCszyaZ2QNT47gVCWN6D1KKYf3KOCGap6RegUqQhXsBCFKsZaoE+DzBCj2TJq7GUDQwwBM5y1fft49Pj6+rbyAJ83QdJeQJ00EQ2+0a9I0Y82eDGAkOnP197qCcn1991JGn8QAZO02A0iMnmEAkYMByJ8Zv7D1+aZaqFJtnm78JgOIawzA72EA0ByfGYAGY0aYgBhAWhSpKMsyikFKyqiUnbQoijiS1xK4lkupzEHKQK9kPfkByH8ooWIJigIkrCyr3DIUhHN7k8O9U9DDKlCZnlLAUyIhhSLBynhvkNRT4NEoccOKDCQCAJJkAKCV4T1AyhPAIYUYhCLHp4LU1EOJFROjmLGUxD/PbDBnb3THwq4CUow4sti+t/2URsOoijDNaQ7NRGeguzR6Aemlll4RmV7APNAMzcXzvYVForl/X1pDc9gcmv12jy5sJkvds+QenRlOOyUDWN9uFo2y+biJBk6aozGAccC8X1ZNMNXlS9kLJtofTFAH08eaY5sCu1hz2GDNpsr5SRvMyYXfZs1lL2sugt2sWTMAmEpFJAtM2DBKRTjlygFJlgTm4dz+a2kkVEQJFbFKpm9Y/mz1MtnP3jxVBe+dwr19liJsTeJrqYj0Uwq4t28krJJJRR+fl6Bie9IMnJOmXmlq9mczgMD0Al/QDyf7QwcYj4iNWmkGuxiAXmn2MgCcpCdjAPDjfusDMy4DEA06wwzAD7l2C4zf/2aYl4ubq5c/zYGZBufT99VaTrNtMAO4WRNMWKcz+s1g59ONjNSbgWtq5JAS6UVGDyQFJlIspZRSJNuzXl3c/dpUDiwSzfXm/vbiypfzpapCT0lzKQUixZbJaxqMekoBikGhG0ZSDoqZ+pWl4iLLoQhZclvKQMpYEvqPJJlrdDHTUpKszm/vO5AoPNXm8s9zvs2syuZ5uS2JTim3Kws3A4AZ2ckAbD1caWmDhmIAD293J31INJ5ft8/BssYAQrM4U0yWF2coUT9Wq0ayZdHsMh0DWL/9PduJRMP5/RwtR7ABWJPmaGCW3rmEMgwLwfnx6tlgDqEzkzCA5evjHlCgbKr7N+ozzAACBwNAuxmCcTGArM4A0F6YQUlY5EvC/qtoXAMxU3/d/rvfDwrCOXl83dYeTOZJfkpi2tVooVNRzTPmB4k0xwLsAb8ezQBYj82MZHAs0o/9oUCpfj0vtfHUrDRDvdLUTyFLqFpphsYQFGpbMzRsJAZQrv4ehgW45581tWxCl8ZeYJ6/Xx8GBdBUH2tvTDoDxgvdzQJN5dmgEdYtcwEP/kQBJYmJLtpkfy84tys1XwgaYVwGDYdLI2OXBs6CkgHQLAquAyXlcQIzubyUx/hXS4rVRJ8baXsklsXi+u5hi04Lmsljbo0txUKJeU3KWMo7h+agMTR3uzS8f8dike/md9k5NKcDhuZBLo0Bk+by/NfRWKCnoQl3AgZQ7gFmeTEGlkW1+cCWHWvQcBFN/TZ3EE0/XF59HwMLjNCnups1vQCGaPrKC6BmQQUm1L6GBX13YFhTDkSwtaG/koxyWiI9MsppvSTOo8dxsMDseZ7S88iil9sSmf5wPNCSMgKylLQYgF9nAGGTAYT6qyQG4HkfjqXxoWgur5a9DCBwMAD2aR/PALzzgYR/GJrfN2rg/BQGIEnMeFgk7fx2KBjboNEOaqgxANulYYIabj5GxQKmaB5hBjMADp1oBzUkdlCDiR3IOfCAgxry5zE7GaK5Xavoh9LEQZjQiVoog9ABEyRBHEQZLwSaXsiBCIZLMBpGaHBER6OvrYeJ0QObWCyF9ePh7LIDzOK5JOOpRzZKfB4ZT9FpisZTLUXkzuSG0aQZNhkA9MCGy5H0eNKEeeZ85PcCaO608dR2nRuTKbs0RvYCjDL1N8rmZfkpQQ1vY3cyKNXfGhi12pgjqGHsr1+heSmbdrOOoIbQFdSAw3TYWpzV4s2Y/eA6nYbm8nkSLHJ4toZmhUNFdhT20GwxgOAIBrAcjZQ1yvUqnZsBbF+ngQKkxpsxqIGWfz+nArM4cTOAoJcBqKAG9qVDUAM5+Qvtc0c3fYoO+zzVPn4Iaii2dxP1MgnmfMme/ZKbQ0ENOgQg4pCDqAagFdRg4egMaoivpphkqMh+Zgc1lB1BDeVIQQ3LbydTYZHj2YPu0fMENSx/jLcoa4E5++eNyQB2grmZ7pOR5WMvMDtcGv4ul8by5X66NyPZptcT1BD0uTSwpfYKkodz+nBsYxZ25FFsZZ1g/t5ETm9WcwLEl5KZCfDAoIY/U/ay6tfF0h3U0LtsPjioYUSjjAPM2dNyzqCGdvDVmGXz0X4zewQ1mGAFuR7tD2qIpN7DVCxTgbnVQQ0YbFF47aAGjIOgQCD6lSEOQgU1oFGA4gTAZCCL2jChLyUUyqCk10lH5kX1uKbnkVWjIQmWTLPJ23lQUIN/NTGYuwdkANrWHHBQQzB+UEM0B5i5ghrKqbvZ4WD2D2oYySfTDebx4ZigBvMRZfoTyzBYqPXtg7Qd1V7uAHP5riIdat9+piXzxZvhCRSzvD+oofZ6TFCD/LmmBnN2sewNagi1QUO/nmNcGrOBOZQB/KfBWAaNejdjl0bYspvpr3JS0mx3M2U3g7CplucM3Zk6uBmDGrDgN2VLeZeUZ5MPAGcXwtUaEkVXYw8LalheTAzm1zk7TScPapgczNn5fEENXwtMuJsB+L0MYAYw3M0aDMAR1BByUAPNp2BNY4nmXbQZsmT+CmFMk4PZ4uRPRkfTHFoC2JJgaXBQQ2gFNcw4NGsG0Njd8v+ZARzj0vhyYA4KalAnNcxHNAPDAHYFNYTtkxryeihDTcpr0iwMgEMZaoc7mOYIbraRmkENflyAH9TvDGrwQG+eecYR1MDRFrhVZXhQQ3MfdT2oYZ55xh3U4I8d1PCFGcB/HcyRLo1ZwAzdp2kZNODTEVF9/yUdgxD7rX2antqnOQcDyLER+MWnejeon9JJDbKJtE8zUPtCabjIeZ6pGc5dxxvRPJMpl8ack2aPSyMPx3BpfDkG0KQz/S4NOwjsE95Mv0uD34zscmqfpup8AUxQ2qWhtiz7pKdcGrOAUUGH4NJI2aWRsktDT+k4c2qXhn22U87UIbOpQ8LXRDzHesa0RgVpc8Mah2HV4ksHuzSSmt48DEBz38aJI3qlOZZL42tNmv9LDGC3S2MGu9khLg12X9Tchv3+w7zY/pwUiyw/hXGhGKdLXtiOjIa0p0sjUz/Xt4nBVH/8bpfGyAaNiT3n4Dp7zeYyaLy7zmAYFcz9y35g7H2aO1waqpsJ6mZvk8ZnQNl8i3lMGuLSUN3MuAUEew2Mz8DlUxAj75pxlerugSyVDpeKYNFI1Ow9wxpBSi8mfzGLxcl7qTf1uoMaAjpGr84ADnFprKd/MRBz9joSA+h3aZxPsaGhjeZpeZxLQ2/C63VprI7f/DsIzMlVNNylocGUWc57onK9GytT1sOszDK9GJCS/Gs69bDMaO5FRo0o8yw3kt6XJa/R2qSEMQBZQrdLw7yUGgOIbo7Y+L9nuf6bpv0MwPSqQxjA9nWOj5/R3K2jQybNgWAm5zF2kaymHOfwaYdL4+H3nFAQDYwCh7s0rJW3td7erubGIsvvlcBGCF7+C+Nrabg0cuPSSJVLQ/sL6Dg4tITQWXJXvxezdjKF5iHl4+fUBlI85I6bbQDs3A3ILo3k9XF+JIhmXR7l0nAxgPW0kYzdpXqE0ypHMWjwm/ksLMCgS8ebscAwA8DNAbwSar4ZsMfCiQPzzZUONJdLPtrO8WZ8/Q50UENoMQCvyQCiv5+IBbgAhTZ1MwAxmAFMHWA+AM3jOh7JBvDw+5OxwKa61+iYoAbeDry+/WwoUG7lhOdMP9Hap4n7L80+Qmuf5vptWvPlsFKd/Yxa2y0z3m6p92nSsdUFHWBNiEqzTzOKJ7crDSvV/Xtaa1hscESD92kG0dTWy6Flc5oeu08z+vSRTBfYIHAkA4ieP4Ndukp18n7gwVOBni/9OYxkg0q1+dc44VS7NEw32xHUMIMpdmjZfAsHBjX4HUEN69tPJTL1Uv145dn8sKCG9e0X+WQAzE0DzL77NL82mPY+TRWsYIIa/FpQwxcDg9+MK6ghoqAGPuVJsBSXnKXq5sfXAXO7rgU1cGMNgF0MIP9aYGwGsG9Qw1cDcxQD+M+BccfOhF8SzA4GIGyLZtII0v5Kk+btTcGNdVs0tUvDdfCUJGhyaD75IkXPM6VrpUm25h0MIP13evoNy+lpXTodIA1WPGXRJWnFPxfdDGC4QWO7XKpUZSgtQUpZ8lBKWdo6qmyNomcruqqktsRVymCKoAZPOxrxMRhqpHIQyDomjwwFdbDkoW2r0FItOomOKgFJHT4dtk44TV3bgVueMzq2mc58zvGkZ3Ia5PJ/5T7IEnXuNOrRxwZHPrcUE2Ep5vqU6AQPt86UYl5XzJRibBRzVFRjEp1FncNFoTZtYI4L8+QMmw2K2QFBDYMTUAk+4M4cJdbIDdhKP7FPAqpmUMP/QArKfQ6fniwF5bGHT/uBDmoIOg6f5r1T+vDp9i6q3NEza0cvlh3drCcFpZ3lhKNnQ0c3i0U7qEFeU6ciyO9SBzXACEFuTy3BRS3J7zI2UsaSqpKra3ix1NdEKfiaipnOhI6jzlRQg0BJ8DV17KzgoAahWttOP9Ef1BDa+0BAagzNbDxU5+5sWfJCnfDHw0DyLf3CYT13b+fQPEFQw4AEVDcrKK9XUFDsltbWRzlpRu3DwETP999lucTynUWXdP9P3TsYGYzJLtSRfkIzAH1MDx3Yg4pRPbYteKJcoAPK9blXP0fVZNS2j57sCWqojTBW+olc5XEQejqFqVpleYCwQSIJeK2W9kkrKgoB/18Mzwz0pO+Y6XvTkzO+hu3C7FJAVFqKpomkuBDyAw0oqCGsBTX4raCGoBX8kBaQFYzy3YLJBCyhe4TWVU8qQR5FKEAuXTITUeY+bTCip1Ai3kg37MighsakWXZNmvuA6WUAbMo7cp/mMQzgfajXoFo8RzPn0+w7FtwNZqjTsDp7aYNpvBk+fNrk6wt6gxo4bSQdxF60M0RyUkmVF5L1Cs5DyXkhvdUeYEqV7RL3TmL+adwHFqdWjkvzFI+zXaYm22WtijOo4QgG4A8+lLb6tfLqu1uaDIClIQxgeFBD7OjInZPm4MBHcOt9dQZwM9TSfv0xGZ3pCWqondQg7PQTroza0dPQN3NuP8UwAFdG7cLFAGxTkyOoIdZBDXaOaPK0N4If4sKOGoC6y6t2TmAnlsvVVvvzBd9b2AdHm6OaEz5Dupnv2gQ15I2ghoiCGnDQoKAGfWo16mW2nsoRjjgifdD1QINu9fsVHoNHdcvKEWUGz6VAh3bTvVNqjnpKSpnIqYpU5KCGiIMa6ic1qJVmzaDhnmccBg29bBaDdtdVZ+ewqgz1POPKqM0MIHDMM7Wghto8M7pBY1AYREVBVzMYNI4Ds3zePdVUcjGz26ARHGbQ4MVDXHg181TKi5q0qWe6WcGDDY6cebDcfcxudQt2GtPNehO3O7cDczcTdYNGv0ujFqSdNJPutCRl/yx2RqdWd6UyRxgvZVbbCa6l2mkzjXNnGi4NqtKd6LC0Vpr6pAbWM1YmyxIUYEbtVX/ys+r71bLuNOqdZ+q5NHrnmQkMGpRRuxcNYGl/lKNm1B6Hmykw257EdNX31dIaYUY3aAxjzSJwsObI4dKIl1c/OjJqQ/JMl0uj326WDmLNmf218flSudmg0RwjXGcoNIaLLNmun75ft+BU15dPN3nzAKmc29AYBZpnTsVdVdQ2LQEW5qatuZMBKL0+BiC/SlVl9dHIrV1dn327kos4bTh32JrtoVmtNHekn5iSAXCVJHh9+rthO9r15u7tIYH17qwujdH8M1G5fP338Qjl7uMZFmPDXRr+QWAC7j4BE02fo2f7wQR+0ATj6pnoaKWF8A5nE0jNbFq+A0zD1GTn0wRHofYYYvZaslGav+bWX9mEqXPgqsm46dOsKwqWnD7NzKFIrsqYFWOjaDdR+TSPd2k4h+YB3mbaRPKlXRqRiZlUj9GdEpNkEZhg0knzvw5mv4zazAAsRyO5NCyXow5qYK85Sx6SwUJL3UTT6dJwEc22S8Nx+DQkqE8y+6SE3JbMoQlJvlsxY0XzkKaiuU1T0fVkaKJoHOaQ054z5dKAt4vmWePSCOoujYbrw+XSqFXxqAr5J/woIP8E7O8NlSS7pXZp+HLpAIfc0TyjqrBLw2+7NILIV0dPmqfsZTifNaih36XxCQxg5giN/wPmDWgPlvobOgAAAABJRU5ErkJggg=="
                alt="#"
              />
            </div>
            <button className="text-gray-700">Logout</button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">150</div>
                <div className="text-sm">Employees</div>
              </div>
            </div>
            <div className="bg-green-100 text-green-600 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">15</div>
                <div className="text-sm">Products</div>
              </div>
            </div>
            <div className="bg-orange-100 text-orange-600 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">300</div>
                <div className="text-sm">Customers</div>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-600 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">150</div>
                <div className="text-sm">Orders</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-6 gap-4 mb-6">
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Employees</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Products</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Customer</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Order</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Collection</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Add Expenses</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Complaint</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100">
              <div className="text-2xl">+</div>
              <div className="text-sm mt-2">Announcement</div>
            </div>
          </div>

          {/* Tables */}
          <div className="grid grid-cols-2 gap-6">
            {/* Latest Orders */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4">Latest Orders</h3>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Customer Name</th>
                    <th className="px-4 py-2">Pkts/Kg</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Employee Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2">Alice Thompson</td>
                    <td className="px-4 py-2">100 Kg</td>
                    <td className="px-4 py-2">28/11/2023</td>
                    <td className="px-4 py-2">John Smith</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Emily Davis</td>
                    <td className="px-4 py-2">50 Pkts</td>
                    <td className="px-4 py-2">28/11/2023</td>
                    <td className="px-4 py-2">James Johnson</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Latest Collections */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4">Latest Collections</h3>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Customer Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Employee Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2">EcoSeed Harvesters</td>
                    <td className="px-4 py-2">20000</td>
                    <td className="px-4 py-2">28/11/2023</td>
                    <td className="px-4 py-2">John Smith</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">GreenThumb Seeds</td>
                    <td className="px-4 py-2">500000</td>
                    <td className="px-4 py-2">28/11/2023</td>
                    <td className="px-4 py-2">James Johnson</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
