'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { BellIcon } from '@/components/icons/BellIcon'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { CheckIcon } from '@/components/icons/CheckIcon'
import { CheckboxIcon } from '@/components/icons/CheckboxIcon'
import { ChevronRightLeftIcon } from '@/components/icons/ChevronRightLeftIcon'
import { DividerIcon } from '@/components/icons/DividerIcon'
import { DocumentIcon } from '@/components/icons/DocumentIcon'
import { ListIcon } from '@/components/icons/ListIcon'
import { MagnifyingGlassIcon } from '@/components/icons/MagnifyingGlassIcon'
import { ClipboardIcon } from '@/components/icons/ClipboardIcon'
import { RadioGroupIcon } from '@/components/icons/RadioGroupIcon'
import { ShapesIcon } from '@/components/icons/ShapesIcon'
import { SquaresPlusIcon } from '@/components/icons/SquaresPlusIcon'
import { SwitchIcon } from '@/components/icons/SwitchIcon'
import { TagIcon } from '@/components/icons/TagIcon'

const resources = [
  {
    href: '/fmbf-components/accordion',
    name: 'Accordion',
    description:
      'A collapsible content component that organizes information into expandable panels with smooth animations.',
    icon: SquaresPlusIcon,
    pattern: {
      y: 22,
      squares: [
        [0, 1],
        [1, 2],
      ],
    },
  },
  {
    href: '/fmbf-components/alertDialog',
    name: 'Alert Dialog',
    description:
      'A modal dialog component for displaying important messages, confirmations, and alerts with customizable action buttons.',
    icon: BellIcon,
    pattern: {
      y: -6,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/fmbf-components/badge',
    name: 'Badge',
    description:
      'A versatile badge component for displaying labels, status indicators, and notifications with customizable variants and icons.',
    icon: TagIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/button',
    name: 'Button',
    description:
      'A versatile button component with multiple style variants, loading states, and action handling capabilities.',
    icon: CheckIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/buttonBar',
    name: 'Button Bar',
    description:
      'A segmented control component for selecting between multiple options with customizable variants, orientation, and keyboard navigation.',
    icon: ChevronRightLeftIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/card',
    name: 'Card',
    description:
      'A flexible content container component for displaying structured information with title, subtitle, body text, and optional fields.',
    icon: ShapesIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/checkbox',
    name: 'Checkbox',
    description:
      'An interactive checkbox component for binary choices with support for checked, unchecked, and indeterminate states.',
    icon: CheckboxIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/combobox',
    name: 'Combobox',
    description:
      'An interactive dropdown component with search functionality for selecting from a list of options with keyboard navigation.',
    icon: MagnifyingGlassIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/contentTitle',
    name: 'Content Title',
    description:
      'A simple, semantic heading component for content sections with consistent typography and spacing for improved content hierarchy.',
    icon: DocumentIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/divider',
    name: 'Divider',
    description:
      'A flexible divider component that creates visual separation between content sections with multiple border styles including solid, dashed, and dotted variants.',
    icon: DividerIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/dropdown',
    name: 'Dropdown',
    description:
      'A flexible dropdown menu component supporting checkboxes, radio buttons, groups, and custom actions.',
    icon: ListIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/infoCard',
    name: 'Info Card',
    description:
      'A data visualization component for displaying key metrics with formatted values, trend indicators, and contextual information.',
    icon: ClipboardIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/input',
    name: 'Input',
    description:
      'Learn about the input component and how to create, retrieve, update, delete, and list inputs.',
    icon: ChatBubbleIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/pageTitle',
    name: 'Page Title',
    description:
      'A prominent page heading component that displays main page titles with optional subtitles using large, bold typography for clear page identification.',
    icon: DocumentIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/radioGroup',
    name: 'Radio Group',
    description:
      'An interactive radio group component for single-choice selections with support for vertical and horizontal layouts, labels, descriptions, and keyboard accessibility.',
    icon: RadioGroupIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/sectionTitle',
    name: 'Section Title',
    description:
      'A compact section heading component that displays subsection titles with optional subtitles using medium typography for detailed content organization.',
    icon: DocumentIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/fmbf-components/switch',
    name: 'Switch',
    description:
      'An interactive switch component for boolean (on/off) selections with support for labels, descriptions, and keyboard accessibility.',
    icon: SwitchIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  // {
  //   href: '/conversations',
  //   name: 'Conversations',
  //   description:
  //     'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
  //   icon: ChatBubbleIcon,
  //   pattern: {
  //     y: -6,
  //     squares: [
  //       [-1, 2],
  //       [1, 3],
  //     ],
  //   },
  // },
  // {
  //   href: '/messages',
  //   name: 'Messages',
  //   description:
  //     'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
  //   icon: EnvelopeIcon,
  //   pattern: {
  //     y: 32,
  //     squares: [
  //       [0, 2],
  //       [1, 4],
  //     ],
  //   },
  // },
  // {
  //   href: '/groups',
  //   name: 'Groups',
  //   description:
  //     'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
  //   icon: UsersIcon,
  //   pattern: {
  //     y: 22,
  //     squares: [[0, 1]],
  //   },
  // },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl mask-[linear-gradient(white,transparent)] transition duration-300 group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/2 stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-zinc-900/7.5 ring-inset group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm/7 font-semibold text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Components() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="components">
        Components
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
