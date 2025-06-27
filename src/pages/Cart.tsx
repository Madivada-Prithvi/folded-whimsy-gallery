
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Plus, Trash2, ArrowLeft, ShieldCheck, Truck, Heart } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Serenity Garden Set',
      price: 89,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop',
      quantity: 2,
      inStock: true
    },
    {
      id: 2,
      name: 'Romantic Cranes',
      price: 156,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop',
      quantity: 1,
      inStock: true
    },
    {
      id: 3,
      name: 'Sakura Dreams',
      price: 67,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&h=200&fit=crop',
      quantity: 1,
      inStock: true
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-origami-sage transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
              <h1 className="text-3xl md:text-4xl font-light text-gray-800">
                Your Cart <span className="text-origami-sage font-medium">({cartItems.length})</span>
              </h1>
            </div>
          </div>

          {cartItems.length === 0 ? (
            // Empty Cart
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-origami-sky/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-12 w-12 text-origami-sky" />
              </div>
              <h2 className="text-2xl font-light text-gray-800 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Discover our beautiful origami collection</p>
              <Link to="/shop">
                <Button size="lg" className="origami-button">
                  Start Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card className="paper-card p-6">
                  <h2 className="text-xl font-medium text-gray-800 mb-6">Items in Your Cart</h2>
                  
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border border-origami-fold rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">In stock</p>
                          <p className="text-lg font-semibold text-origami-sage">${item.price}</p>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="h-4 w-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="paper-card p-6 sticky top-24">
                  <h2 className="text-xl font-medium text-gray-800 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-origami-fold pt-4">
                      <div className="flex justify-between text-lg font-semibold text-gray-800">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full origami-button mb-4">
                    Proceed to Checkout
                  </Button>

                  {/* Shipping Info */}
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-origami-sage" />
                      <span>Free shipping on orders over $100</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="h-4 w-4 text-origami-sage" />
                      <span>Secure checkout with SSL encryption</span>
                    </div>
                  </div>
                </Card>

                {/* Recommended Products */}
                <Card className="paper-card p-6 mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">You might also like</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=60&h=60&fit=crop"
                        alt="Playful Forest Animals"
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">Playful Forest Animals</p>
                        <p className="text-sm text-origami-sage">$45</p>
                      </div>
                      <Button size="sm" variant="outline">Add</Button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://images.unsplash.com/photo-1551038247-3d9af20df552?w=60&h=60&fit=crop"
                        alt="Zen Garden Stones"
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">Zen Garden Stones</p>
                        <p className="text-sm text-origami-sage">$78</p>
                      </div>
                      <Button size="sm" variant="outline">Add</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
