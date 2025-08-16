'use client';

import Button from './components/Button';
import Checkbox from './components/Checkbox';
import { useState } from 'react';

export default function Home() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(false);
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Button Component Showcase</h1>

            {/* Variants Section */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Variants</h2>
                <div className="flex gap-4 flex-wrap">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="text">Text Button</Button>
                </div>
            </section>

            {/* Sizes Section */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Sizes</h2>
                <div className="flex items-center gap-4 flex-wrap">
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
            </section>

            {/* Width Section */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Width Variants</h2>
                <div className="flex flex-col gap-4 max-w-md">
                    <Button width="auto">Auto Width</Button>
                    <Button width="full">Full Width</Button>
                </div>
            </section>

            {/* Disabled State */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
                <div className="flex gap-4 flex-wrap">
                    <Button variant="primary" disabled>
                        Disabled Primary
                    </Button>
                    <Button variant="secondary" disabled>
                        Disabled Secondary
                    </Button>
                    <Button variant="outline" disabled>
                        Disabled Outline
                    </Button>
                    <Button variant="text" disabled>
                        Disabled Text
                    </Button>
                </div>
            </section>

            {/* Combined Examples */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Combined Examples</h2>
                <div className="flex flex-col gap-4 max-w-md">
                    <Button variant="primary" size="large" width="full">
                        Large Full Width Primary
                    </Button>
                    <Button variant="outline" size="small">
                        Small Outline Button
                    </Button>
                    <Button variant="secondary" size="medium" disabled>
                        Disabled Medium Secondary
                    </Button>
                </div>
            </section>

            {/* Checkbox Showcase */}
            <h1 className="text-3xl font-bold mb-8 mt-16">Checkbox Component Showcase</h1>

            {/* Checkbox Variants */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Variants</h2>
                <div className="flex flex-col gap-4">
                    <Checkbox label="Primary Checkbox" variant="primary" checked={checked1} onChange={setChecked1} />
                    <Checkbox label="Secondary Checkbox" variant="secondary" checked={checked2} onChange={setChecked2} />
                    <Checkbox label="Outline Checkbox" variant="outline" checked={checked3} onChange={setChecked3} />
                </div>
            </section>

            {/* Checkbox Sizes */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Sizes</h2>
                <div className="flex flex-col gap-4">
                    <Checkbox label="Small Checkbox" size="small" checked={checked1} onChange={setChecked1} />
                    <Checkbox label="Medium Checkbox" size="medium" checked={checked2} onChange={setChecked2} />
                    <Checkbox label="Large Checkbox" size="large" checked={checked3} onChange={setChecked3} />
                </div>
            </section>

            {/* Disabled State */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
                <div className="flex flex-col gap-4">
                    <Checkbox label="Disabled Unchecked" disabled checked={false} />
                    <Checkbox label="Disabled Checked" disabled checked={true} />
                </div>
            </section>

            {/* Combined Examples */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Combined Examples</h2>
                <div className="flex flex-col gap-4">
                    <Checkbox label="Large Primary Checkbox" size="large" variant="primary" checked={checked1} onChange={setChecked1} />
                    <Checkbox label="Small Secondary Checkbox" size="small" variant="secondary" checked={checked2} onChange={setChecked2} />
                    <Checkbox label="Medium Outline Disabled" size="medium" variant="outline" disabled checked={true} />
                </div>
            </section>
        </div>
    );
}
