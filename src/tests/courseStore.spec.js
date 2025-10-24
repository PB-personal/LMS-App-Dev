import { useCourseStore } from '@/stores/courseStore'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, it, expect, vi } from 'vitest'
import coursesData from '@/mock/courses.json'

describe('Course store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    // Mock the fetch API
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(coursesData),
        }),
      ),
    )
  })

  it('should get course data correctly', async () => {
    const store = useCourseStore()
    await store.getCourses()

    expect(store.courses.length).toBeGreaterThan(0)
    expect(store.courses[0]).toHaveProperty('title')
    expect(store.courses).toEqual(coursesData)
  })

  it('should enroll in a course correctly', async () => {
    const store = useCourseStore()
    await store.getCourses()
    const courseId = 1
    store.enrollCourse(courseId)

    const enrolledCourse = store.courses.find((c) => c.id === courseId)
    expect(enrolledCourse.enrolled).toBe(true)
  })
})
